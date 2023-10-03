// 检测窗口大小变化
window.addEventListener('resize', scaleUI);

// 初始化时执行一次缩放
scaleUI();

// 缩放UI
function scaleUI() {
  // 获取窗口宽度和高度
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // 设置缩放比例，这里以窗口宽度作为参考
  var scale = windowWidth / 1920; // 假设设计稿宽度为1920px

  // 获取需要缩放的元素
  var elementsToScale = document.querySelectorAll('.autoscale');

  // 遍历元素并应用缩放
  for (var i = 0; i < elementsToScale.length; i++) {
    var element = elementsToScale[i];
    element.style.transform = 'scale(' + scale + ')';
    element.style.transformOrigin = 'top left';
  }
}
