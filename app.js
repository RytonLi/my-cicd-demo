// app.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. 动态设置部署时间，验证JS是否正常加载
  const timeEl = document.getElementById('deploy-time');
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  // 2. 模拟部署状态指示灯亮起
  const dot = document.querySelector('.status .dot');
  if (dot) {
    setTimeout(() => {
      dot.classList.add('active');
    }, 800);
  }

  console.log('✅ CI/CD 实验页面加载成功！');
});