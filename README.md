  ## js_micro_slider
  My native JS slider. It`s a pet project

# Getting Started (how to use):
For the first, you mast have a parent HTML element and list of child elements or few elements in it:

<html>
  <body>
    <ul class="list">
          <li class="list__item">
            <div class="list__item_inner">1</div>
          </li>
          <li class="list__item">
            <div class="list__item_inner">2</div>
          </li>
          <li class="list__item">
            <div class="list__item_inner">3</div>
          </li>
          <li class="list__item">
            <div class="list__item_inner">4</div>
          </li>
   </ul>
  </body>
 </html>
 
  also, you mast have a wrapper in child elements of list for correctly handle css properties like margins and paddings.
 
  To start script, you can collect to the object the DOM reference to parent and child (as an array) elements.
 And if you have an prev and next buttons you can add it to object as stated in "OnPageSlider.js".
 
 Then you mast hand over it object to the slider(DOMReference) function.
 
 And it`s done! Have a fan!
 
 The internal structure of the script is very simple that's why you can modify it as you want.

  ### Description:
    This is slider writen on native JS with no dependencies and have no many functionalitys.
    You can use it for education or in your project.
