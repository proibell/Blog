const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    audio: [
      {
        name: '我记得',
        artist: '赵雷',
        url: 'https://music.163.com/#/song?id=1974443814',
      }
    ]
});