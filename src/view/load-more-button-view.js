import AbstractView from '../framework/view/abstract-view';

const createLoadMoreButtonTemplate = () => '<button class="load-more" type="button">Загрузи больше</button>';

export default class LoadMoreButtonView extends AbstractView {
  get template() {
    return createLoadMoreButtonTemplate();
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}
