import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { useNavigate } from 'react-router-dom';

const SECTIONS = [
    {
        title: 'SIGMOID 2K26',
        line1: 'Where vision meets reality,',
        line2: 'we shape the future of tomorrow',
    },
    {
        title: 'PRESENTED BY',
        line1: 'Beyond the boundaries of imagination,',
        line2: 'lies the universe of possibilities',
    },
    {
        title: 'ECE',
        line1: 'In the space between thought and creation,',
        line2: 'we find the essence of true innovation',
    },
];

const TOTAL_SECTIONS = SECTIONS.length;

export const HorizonHero = ({ startTimer }) => {
    const canvasRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const progressRef = useRef(null);
    const menuRef = useRef(null);
    const overlayRef = useRef(null);

    const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });

    const [slideProgress, setSlideProgress] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const [sectionData, setSectionData] = useState(SECTIONS[0]);
    const [isReady, setIsReady] = useState(false);

    const threeRefs = useRef({
        scene: null,
        camera: null,
        renderer: null,
        composer: null,
        stars: [],
        nebula: null,
        mountains: [],
        animationId: null,
        locations: [],
        targetCameraX: 0,
        targetCameraY: 30,
        targetCameraZ: 100,
    });

    // ─── THREE.JS INIT ─────────────────────────────────────────────────────────
    useEffect(() => {
        const refs = threeRefs.current;

        // Scene
        refs.scene = new THREE.Scene();
        refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

        // Camera
        refs.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        refs.camera.position.set(0, 20, 100);

        // Renderer
        refs.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        refs.renderer.toneMappingExposure = 0.25;

        // Post-processing
        refs.composer = new EffectComposer(refs.renderer);
        refs.composer.addPass(new RenderPass(refs.scene, refs.camera));

        createStarField();
        createNebula();
        createMountains();
        createAtmosphere();

        refs.locations = refs.mountains.map(m => m.position.z);
        refs.targetCameraX = 0;
        refs.targetCameraY = 30;
        refs.targetCameraZ = 300;

        animate();
        setIsReady(true);

        const handleResize = () => {
            if (!refs.camera || !refs.renderer || !refs.composer) return;
            refs.camera.aspect = window.innerWidth / window.innerHeight;
            refs.camera.updateProjectionMatrix();
            refs.renderer.setSize(window.innerWidth, window.innerHeight);
            refs.composer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (refs.animationId) cancelAnimationFrame(refs.animationId);
            window.removeEventListener('resize', handleResize);
            refs.stars.forEach(s => { s.geometry.dispose(); s.material.dispose(); });
            refs.mountains.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
            if (refs.nebula) { refs.nebula.geometry.dispose(); refs.nebula.material.dispose(); }
            refs.renderer?.dispose();
        };

        // ── helpers ──────────────────────────────────────────────────────────────

        function createStarField() {
            const starCount = 5000;
            for (let i = 0; i < 3; i++) {
                const geometry = new THREE.BufferGeometry();
                const positions = new Float32Array(starCount * 3);
                const colors = new Float32Array(starCount * 3);
                const sizes = new Float32Array(starCount);

                for (let j = 0; j < starCount; j++) {
                    let x = 0;
                    let y = 0;
                    let z = 0;

                    do {
                        const radius = 200 + Math.random() * 800;
                        const theta = Math.random() * Math.PI * 2;
                        const phi = Math.acos(Math.random() * 2 - 1);
                        x = radius * Math.sin(phi) * Math.cos(theta);
                        y = radius * Math.sin(phi) * Math.sin(theta);
                        z = radius * Math.cos(phi);
                    } while (Math.abs(x) < 28 && Math.abs(y) < 28);

                    positions[j * 3] = x;
                    positions[j * 3 + 1] = y;
                    positions[j * 3 + 2] = z;

                    const color = new THREE.Color();
                    const r = Math.random();
                    if (r < 0.7) color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
                    else if (r < 0.9) color.setHSL(0.08, 0.5, 0.8);
                    else color.setHSL(0.6, 0.5, 0.8);
                    colors[j * 3] = color.r; colors[j * 3 + 1] = color.g; colors[j * 3 + 2] = color.b;
                    sizes[j] = Math.random() * 2 + 0.5;
                }

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

                const material = new THREE.ShaderMaterial({
                    uniforms: { time: { value: 0 }, depth: { value: i } },
                    vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            void main() {
              vColor = color;
              vec3 pos = position;
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              vec4 mv = modelViewMatrix * vec4(pos, 1.0);
              if (mv.z > -1.0) {
                gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
                gl_PointSize = 0.0;
                return;
              }
              float pointSize = size * (300.0 / max(-mv.z, 1.0));
              gl_PointSize = clamp(pointSize, 0.5, 6.0);
              gl_Position = projectionMatrix * mv;
            }`,
                    fragmentShader: `
            varying vec3 vColor;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              gl_FragColor = vec4(vColor, 1.0 - smoothstep(0.0, 0.5, d));
            }`,
                    transparent: true,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                });

                const stars = new THREE.Points(geometry, material);
                refs.scene.add(stars);
                refs.stars.push(stars);
            }
        }

        function createNebula() {
            const geo = new THREE.PlaneGeometry(8000, 4000, 100, 100);
            const mat = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0x0033ff) },
                    color2: { value: new THREE.Color(0xff0066) },
                    opacity: { value: 0.15 },
                },
                vertexShader: `
          varying vec2 vUv; varying float vElevation; uniform float time;
          void main() {
            vUv = uv; vec3 pos = position;
            float elev = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elev; vElevation = elev;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }`,
                fragmentShader: `
          uniform vec3 color1; uniform vec3 color2;
          uniform float opacity; uniform float time;
          varying vec2 vUv; varying float vElevation;
          void main() {
            float m = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 col = mix(color1, color2, m * 0.5 + 0.5);
            float a = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            a *= 1.0 + vElevation * 0.01;
            gl_FragColor = vec4(col, a);
          }`,
                transparent: true,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false,
            });
            const nebula = new THREE.Mesh(geo, mat);
            nebula.position.z = -1050;
            refs.scene.add(nebula);
            refs.nebula = nebula;
        }

        function createMountains() {
            const layers = [
                { distance: -50, height: 60, color: 0x1a1a2e, opacity: 1 },
                { distance: -100, height: 80, color: 0x16213e, opacity: 0.8 },
                { distance: -150, height: 100, color: 0x0f3460, opacity: 0.6 },
                { distance: -200, height: 120, color: 0x0a4668, opacity: 0.4 },
            ];
            layers.forEach((layer, index) => {
                const points = [];
                for (let i = 0; i <= 50; i++) {
                    const x = (i / 50 - 0.5) * 1000;
                    const y = Math.sin(i * 0.1) * layer.height
                        + Math.sin(i * 0.05) * layer.height * 0.5
                        + Math.random() * layer.height * 0.2 - 100;
                    points.push(new THREE.Vector2(x, y));
                }
                points.push(new THREE.Vector2(5000, -300));
                points.push(new THREE.Vector2(-5000, -300));

                const shape = new THREE.Shape(points);
                const geo = new THREE.ShapeGeometry(shape);
                const mat = new THREE.MeshBasicMaterial({
                    color: layer.color,
                    transparent: true,
                    opacity: layer.opacity,
                    side: THREE.DoubleSide,
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.z = layer.distance;
                mesh.position.y = layer.distance;
                mesh.userData = { baseZ: layer.distance, index };
                refs.scene.add(mesh);
                refs.mountains.push(mesh);
            });
        }

        function createAtmosphere() {
            const geo = new THREE.SphereGeometry(400, 32, 32);
            const mat = new THREE.ShaderMaterial({
                uniforms: { time: { value: 0 } },
                vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
                fragmentShader: `
          varying vec3 vNormal; uniform float time;
          void main() {
            float i = pow(0.7 - dot(vNormal, vec3(0,0,1)), 2.0);
            vec3 atm = vec3(0.3, 0.6, 1.0) * i * (sin(time * 2.0) * 0.1 + 0.9);
            gl_FragColor = vec4(atm, i * 0.03);
          }`,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true,
            });
            refs.scene.add(new THREE.Mesh(geo, mat));
        }

        function animate() {
            refs.animationId = requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            refs.stars.forEach(s => {
                if (s.material.uniforms) s.material.uniforms.time.value = time;
            });
            if (refs.nebula) {
                if (refs.nebula.material.uniforms) refs.nebula.material.uniforms.time.value = time * 0.5;
            }

            if (refs.camera) {
                const k = 0.05;
                smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * k;
                smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * k;
                smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * k;

                refs.camera.position.x = smoothCameraPos.current.x + Math.sin(time * 0.1) * 0.3;
                refs.camera.position.y = smoothCameraPos.current.y + Math.cos(time * 0.15) * 0.15;
                refs.camera.position.z = smoothCameraPos.current.z;
                refs.camera.lookAt(0, 10, -600);
            }

            refs.mountains.forEach((m, i) => {
                const p = 1 + i * 0.5;
                m.position.x = Math.sin(time * 0.1) * 0.3 * p;
                m.position.y = 50 + Math.cos(time * 0.15) * 0.15 * p;
            });

            refs.composer?.render();
        }
    }, []);

    // ─── GSAP INTRO ANIMATIONS ─────────────────────────────────────────────────
    useEffect(() => {
        if (!isReady) return;

        gsap.set([menuRef.current, titleRef.current, subtitleRef.current, progressRef.current], {
            visibility: 'visible',
        });

        const tl = gsap.timeline();
        tl.from(menuRef.current, { x: -100, opacity: 0, duration: 1, ease: 'power3.out' });

        if (titleRef.current) {
            tl.from(titleRef.current.querySelectorAll('.title-char'), {
                y: 200, opacity: 0, duration: 1.5, stagger: 0.05, ease: 'power4.out',
            }, '-=0.5');
        }
        if (subtitleRef.current) {
            tl.from(subtitleRef.current.querySelectorAll('.subtitle-line'), {
                y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
            }, '-=0.8');
        }
        tl.from(progressRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' }, '-=0.5');

        return () => { tl.kill(); };
    }, [isReady]);

    // ─── TRANSITION TO A SPECIFIC SECTION ──────────────────────────────────────
    const goToSection = useCallback((sectionIdx) => {
        if (sectionIdx === currentSection) return;

        setCurrentSection(sectionIdx);

        // Cross-fade title & subtitle (same animation as before)
        if (titleRef.current && subtitleRef.current) {
            gsap.to([titleRef.current, subtitleRef.current], {
                opacity: 0, y: -30, duration: 0.35, ease: 'power2.in',
                onComplete: () => {
                    setSectionData(SECTIONS[sectionIdx]);
                    gsap.to([titleRef.current, subtitleRef.current], {
                        opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
                    });
                },
            });
        } else {
            setSectionData(SECTIONS[sectionIdx]);
        }

        // Camera transition (same positions as before)
        const refs = threeRefs.current;
        const camPositions = [
            { x: 0, y: 30, z: 300 },
            { x: 0, y: 40, z: -50 },
            { x: 0, y: 50, z: -700 },
        ];
        const cam = camPositions[sectionIdx] || camPositions[0];
        refs.targetCameraX = cam.x;
        refs.targetCameraY = cam.y;
        refs.targetCameraZ = cam.z;

        // Mountains visibility (same logic as before)
        const progress = sectionIdx / (TOTAL_SECTIONS - 1);
        refs.mountains.forEach((mountain, i) => {
            if (progress > 0.7) {
                mountain.position.z = 600000;
            } else {
                mountain.position.z = refs.locations[i];
            }
            if (refs.nebula) refs.nebula.position.z = mountain.position.z;
        });
    }, [currentSection]);

    // ─── AUTO-ADVANCE TIMER (10s per slide) ──────────────────────────────────────
    useEffect(() => {
        if (!isReady || !startTimer) return;

        const SLIDE_DURATION = 8000; // 8 seconds per slide
        let startTime = Date.now();
        let progressRAF;

        // Animate the progress bar smoothly
        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const t = Math.min(elapsed / SLIDE_DURATION, 1);
            setSlideProgress(t);
            progressRAF = requestAnimationFrame(updateProgress);
        };
        progressRAF = requestAnimationFrame(updateProgress);

        // Advance to next section every 10s
        const interval = setInterval(() => {
            startTime = Date.now();
            setCurrentSection(prev => {
                const next = (prev + 1) % TOTAL_SECTIONS;
                goToSection(next);
                return prev; // goToSection handles the state update
            });
        }, SLIDE_DURATION);

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(progressRAF);
        };
    }, [isReady, goToSection]);

    // ─── RENDER ────────────────────────────────────────────────────────────────
    return (
        <>
            <div
                ref={overlayRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                }}
            >
                {/* Three.js canvas */}
                <canvas
                    ref={canvasRef}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />

                {/* Side menu (removed) */}
                <div ref={menuRef} style={{ display: 'none' }}></div>

                {/* Main hero content */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center', // Centered text alignment
                        padding: '0 20px',
                        textAlign: 'center',
                        zIndex: 5,
                    }}
                >
                    <h1
                        ref={titleRef}
                        style={{
                            visibility: 'hidden',
                            margin: 0,
                            fontSize: 'clamp(2rem, 8vw, 9rem)',
                            fontFamily: '"Helvetica Neue", Arial, sans-serif',
                            fontWeight: 900,
                            letterSpacing: '-0.02em',
                            color: '#FF6B00',
                            lineHeight: 1,
                            overflow: 'hidden',
                        }}
                    >
                        {sectionData.title.split('').map((char, i) => (
                            <span key={i} className="title-char" style={{ display: 'inline-block', width: char === ' ' ? '0.15em' : 'auto' }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>

                    <div
                        ref={subtitleRef}
                        style={{
                            visibility: 'hidden',
                            marginTop: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // Center subtitle
                            gap: 4,
                        }}
                    >
                        {[sectionData.line1, sectionData.line2].map((line, i) => (
                            <p
                                key={i}
                                className="subtitle-line"
                                style={{
                                    margin: 0,
                                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                    fontFamily: '"Helvetica Neue", Arial, sans-serif',
                                    fontWeight: 300,
                                    color: 'rgba(255,255,255,0.65)',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Scroll progress bar */}
                <div
                    ref={progressRef}
                    style={{
                        visibility: 'hidden',
                        position: 'absolute',
                        bottom: 40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 10,
                        zIndex: 10,
                    }}
                >
                    <span style={{
                        fontSize: 10,
                        letterSpacing: '0.4em',
                        color: 'rgba(255,255,255,0.4)',
                        fontFamily: 'monospace',
                    }}>
                        AUTOPLAY
                    </span>
                    <div style={{
                        width: 120,
                        height: 1,
                        background: 'rgba(255,255,255,0.15)',
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${slideProgress * 100}%`,
                            background: 'rgba(255,255,255,0.7)',
                            transition: 'width 0.05s linear',
                        }} />
                    </div>
                    <span style={{
                        fontSize: 10,
                        letterSpacing: '0.3em',
                        color: 'rgba(255,255,255,0.35)',
                        fontFamily: 'monospace',
                    }}>
                        {String(currentSection + 1).padStart(2, '0')} / {String(TOTAL_SECTIONS).padStart(2, '0')}
                    </span>
                </div>

                {/* Section dots */}
                <div style={{
                    position: 'absolute',
                    right: 40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    zIndex: 10,
                }}>
                    {SECTIONS.map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: i === currentSection ? 8 : 4,
                                height: i === currentSection ? 8 : 4,
                                borderRadius: '50%',
                                background: i === currentSection ? '#fff' : 'rgba(255,255,255,0.25)',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                pointerEvents: 'auto',
                            }}
                            onClick={() => goToSection(i)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
