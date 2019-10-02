const $dropListInput = $('.select-drop-down__input');

const $dropListWrapper = $('select-drop-down');
const $dropSizeList = $('#size');
const $dropSizeListInput = $('#size').find($dropListInput);
const $dropTagsList = $('#tags');
const $dropTagsListInput = $('#tags').find($dropListInput);

const $dropList = $('.select-drop-down__list');
const $dropListLink = $('.select-drop-down__list a');
const $dropListCloseBtn = $('.select-drop-down__close-btn');
const $dropListResetBtn = $('.select-drop-down__reset-btn');
const $listVisibleClass = 'select-drop-down__list--visible';
let $thisArray;

function SelectDropDown(input, parent) {

  const $this = input;
  const $thisParent = $this.closest(parent);
  const $thisList = $thisParent.find($dropList);

  if($thisParent.is($dropTagsList)) {

    if ($this.text() === '') {
      $thisArray = [];
    } else {
      $thisArray = $this.text().split(', ');
    }
    for (let i = 0; i < $dropListLink.length; i++) {
      if ($thisArray.indexOf($dropListLink[i].text) !== -1) {
        $dropListLink.eq(i).addClass('active');
      }
    }
    $dropListLink.click(function () {
      const $thisText = $(this).text();
      const $thisIndexOf = $thisArray.indexOf($thisText);
      if ($thisIndexOf !== -1) {
        $thisArray.splice($thisIndexOf, 1);
        $(this).removeClass('active');
      } else {
        $thisArray.push($thisText);
        $(this).addClass('active')
      }
      $this.text($thisArray.join(', '));
      if ($thisArray.length === 0) {
        $(this).text('Выбрать фильтр');
      }
    });
    $dropListResetBtn.click(function (e) {
      e.preventDefault();
      $thisArray = [];
      $(this).closest($dropListWrapper).find($dropListInput).text('Выбрать фильтр');
      $(this).closest($dropListWrapper).find($dropListLink).removeClass('active');
    });
  }

  if ($dropList.hasClass($listVisibleClass)) {
    $dropList.removeClass($listVisibleClass);
    $thisList.addClass($listVisibleClass);
  } else {
    $thisList.addClass($listVisibleClass);
  }



  $dropListCloseBtn.click(function (e) {
    e.preventDefault();
    $dropList.removeClass($listVisibleClass);
  });


}

$dropSizeListInput.click(function () {
  SelectDropDown($dropSizeListInput, $dropSizeList);
});

$dropTagsListInput.click(function () {
  SelectDropDown($dropTagsListInput, $dropTagsList);
});

// ПРАВИЛЬНА!!!!


function selectDropDownFilter() {

  const $titleResult = $('.select-drop-down__input');
  const $titleList = $('.select-drop-down__list');
  const $titleListLink = $('.select-drop-down__list a');
  const $titleParent = $('.select-drop-down');
  let $titleArray;

  if ($titleResult.text() === '') {
    $titleArray = [];
  } else {
    $titleArray = $titleResult.text().split(', ');
  }
  for (let i = 0; i < $titleListLink.length; i++) {
    if ($titleArray.indexOf($titleListLink[i].text) !== -1) {
      $titleListLink.eq(i).addClass('active');
    }
  }

  $titleResult.click(function () {
    const $thisListRes = $(this).closest($('.select-drop-down')).find($titleList);
    $thisListRes.addClass('select-drop-down__list--visible');
  });


  $titleListLink.click(function (e) {
    e.preventDefault();
    const $thisParent = $(this).closest($titleParent);
    const $titleResultVal = $thisParent.find($titleResult);
    const $thisText = $(this).text();
    const $thisIndexOf = $titleArray.indexOf($thisText);
    if ($thisIndexOf !== -1) {
      $titleArray.splice($thisIndexOf, 1);
      $(this).removeClass('active');
    } else {
      $titleArray.push($thisText);
      $(this).addClass('active')
    }
    $thisParent.find($titleResultVal).text($titleArray.join(', '));
    if ($titleArray.length === 0) {
      $(this).closest($titleParent).find($titleResult).text('Выбрать фильтр');
    }
  });
  $('.select-drop-down__close-btn').click(function (e) {
    e.preventDefault();
    $titleList.removeClass('select-drop-down__list--visible');
  });
  $(document).mouseup(function(e) {
    if ($titleList.has(e.target).length === 0) {
      $titleList.removeClass('select-drop-down__list--visible');
    }
  });
  $('.select-drop-down__reset-btn').click(function (e) {
    e.preventDefault();
    $(this).closest($titleParent).find($titleResult).text('Выбрать фильтр');
    $(this).closest($titleParent).find($titleListLink).removeClass('active');
    $titleArray = [];
  });

}

selectDropDownFilter();
