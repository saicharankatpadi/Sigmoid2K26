const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST') {
    const q = url.parse(req.url, true);
    const filename = q.query.name || 'analysis.txt';
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      fs.writeFileSync(filename, body);
      res.end('saved');
    });
  } else {
    res.end(`
      <html><body>
      <h1>Analysis</h1>
      <textarea id="output" style="width:100%; height:300px;"></textarea>
      <button id="save-video" onclick="save('video_analysis.txt')">Save Video Analysis</button>
      <button id="save-images" onclick="save('images_analysis.txt')">Save Images Analysis</button>
      <script>
        function save(name) {
          fetch('/?name=' + encodeURIComponent(name), {method: 'POST', body: document.getElementById('output').value})
            .then(() => {
                document.body.innerHTML += '<div id="status">Saved ' + name + ' successfully</div>';
            });
        }
      </script>
      </body></html>
    `);
  }
});
server.listen(1337, () => console.log('Server running on port 1337'));
