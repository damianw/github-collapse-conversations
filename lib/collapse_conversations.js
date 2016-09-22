(function() {

  var expand = function(button, content, span) {
    button.childNodes[1].textContent = '\nCollapse';
    content.style.display = '';
    span.classList.remove('octicon-unfold')
    span.classList.add('octicon-fold')

  };

  var collapse = function(button, content, span) {
    button.childNodes[1].textContent  = '\nExpand';
    content.style.display = 'none';
    span.classList.remove('octicon-fold')
    span.classList.add('octicon-unfold')
  };

  var bindComments = function(element, buttonContainer, tableToToggle, span) {
    buttonContainer.addEventListener('click', function(e) {
      e.preventDefault();
      if (buttonContainer.textContent !== '\nCollapse') {
        expand(buttonContainer, tableToToggle, span);
      } else {
        collapse(buttonContainer, tableToToggle, span);
      }
    }, true);
  }

  var commentContainers = document.querySelectorAll('.discussion-item-review:not(.outdated-diff-comment-container)').join(document.querySelectorAll('.discussion-item:not(.outdated-diff-comment-container)'));
  for (var i = 0; i < commentContainers.length; ++i) {
    var element = commentContainers[i]
    var button = document.createElement('button')
    button.classList.add('btn-link')
    button.classList.add('discussion-item-toggle')
    button.classList.add('discussion-item-toggle-closed')
    button.classList.add('js-details-target')
    var span = document.createElement('span')
    span.classList.add('octicon')
    span.classList.add('octicon-fold')
    button.appendChild(span)
    var text = document.createTextNode('\nCollapse')
    button.appendChild(text)
    var header = element.querySelector('.discussion-item-header')
    var buttonContainer = header.appendChild(button);
    var tableToToggle = element.querySelector('.discussion-item-body')
    bindComments(element, button, tableToToggle, span)
  }

})();
