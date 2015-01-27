/**
 * @module focusify
 * author : Furkan BAŞARAN <frknbasaran@gmail.com>
 *
 * Small jQuery plugin that focus any element which marked
 */

$.fn.focusify = function (wait, color, type) {
  return this.each(function () {
    var color = "#3498db";
    switch (type) {
      case 'border':
        $(this).find('.focusify-disable').fadeTo("fast", 0.3).addClass('focusedDisable');
        var current = $(this).find('.focusify-enable').css('border');
        $(this).find('.focusify-enable').css('border', '2px solid ' + color).addClass('focusedEnable');
        setTimeout(function () {
          $('.focusedDisable').fadeTo("fast", 1);
          $('.focusedEnable').css('border', current);
          $('.focusify-disable').removeClass('focusedDisable');
          $('.focusify-enable').removeClass('focusedEnable');
        }, wait);
        break;
      case 'background':
        $(this).find('.focusify-disable').fadeTo("fast", 0.3).addClass('focusedDisable');
        var current = $(this).find('.focusify-enable').css('background-color');
        $(this).find('.focusify-enable').css('background-color', color).addClass('focusedEnable');
        setTimeout(function () {
          $('.focusedDisable').fadeTo("fast", 1);
          $('.focusedEnable').css({'background-color': current});
          $('.focusify-disable').removeClass('focusedDisable');
          $('.focusify-enable').removeClass('focusedEnable');
        }, wait);
        break;
      case 'reverse':
        $(this).find('.focusify-disable').fadeTo("fast", 0.3).addClass('focusedDisable');
        var background_color = $(this).find('.focusify-enable').css('background-color');
        var color = $(this).find('.focusify-enable').css('color');
        $(this).find('.focusify-enable').css({'background-color': color, 'color': background_color}).addClass('focusedEnable');
        setTimeout(function () {
          $('.focusedDisable').fadeTo("fast", 1).removeClass('focusedDisable');
          $('.focusedEnable').css({'background-color': background_color, 'color': color}).removeClass('focusedEnable');
        }, wait);
        break;
      default:
        break;
    }
  });
};