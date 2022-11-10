const isWebp = () => {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}

	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
};

const tabs = () => {
	let tabs = document.querySelectorAll('[data-tabs]');
	for (let index = 0; index < tabs.length; index++) {
		const bemBlock = tabs[index].dataset.tabs.split(',')[0];
		const bemElem = tabs[index].dataset.tabs.split(',')[1] || 'item';
		const bemPanel = tabs[index].dataset.tabs.split(',')[2] || 'panel';
		const bemActive = tabs[index].dataset.tabs.split(',')[3] || 'active';
		console.dir(tabs[index].dataset.tabs);
		let tab = tabs[index];
		let tabsItems = tab.querySelectorAll(`.${bemBlock}__${bemElem}`);
		let tabsBlocks = tab.querySelectorAll(`.${bemBlock}__${bemPanel}`);
		for (let index = 0; index < tabsItems.length; index++) {
			let tabsItem = tabsItems[index];
			tabsItem.addEventListener('click', function (e) {
				for (let index = 0; index < tabsItems.length; index++) {
					let tabsItem = tabsItems[index];
					tabsItem.classList.remove(`${bemBlock}__${bemElem}--${bemActive}`);
					tabsBlocks[index].classList.remove(`${bemBlock}__${bemPanel}--${bemActive}`);
				}
				tabsItem.classList.add(`${bemBlock}__${bemElem}--${bemActive}`);
				tabsBlocks[index].classList.add(`${bemBlock}__${bemPanel}--${bemActive}`);
				e.preventDefault();
			});
		}
	}
};

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

const menu = () => {
	if (isMobile.any()) {
		document.body.classList.add('page__body--touch');
	} else {
		document.body.classList.add('page__body--pc');
	}

	const header = document.querySelector('.header');
	const iconMenu = document.querySelector('.menu__icon');
	if (iconMenu != null) {
		const menuBody = document.querySelector('.menu__body');
		iconMenu.addEventListener('click', () => {
			// menuBody.style.paddingTop = `${header.offsetHeight}px`;
			document.body.classList.toggle('page__body--lock');
			iconMenu.classList.toggle('menu__icon--active');
			menuBody.classList.toggle('menu__body--active');
		});
	}
};

menu();
tabs();

isWebp();

let inputsForm = document.querySelectorAll('.form__input');

inputsForm.forEach((input) => {
	input.addEventListener('keyup', () => {
		input.setAttribute('value', input.value);
	});
});

//=TIMER=======================================================================================================================================================
//data-timer
// time[second]
// settings? function

//чтобы время вывести в html в теги нужно добавить data-minute date-second

// settings methods
// window.timerSettings = {
//   alert2() {
//     console.log(1);
//   },
// };

//countdown date
// data-countdown
// time[second]
// settings? function

//чтобы время вывести в html в теги нужно добавить  date-day date-hour data-minute date-second

// timer();

//here settings function

// ===================================================================
//bemBlock = блок class
//bemPanel = елемент class
//bemItem = item таб class
//bemActive = active class
//data-tabs="bemBlock,[bemPanel],[bemItem],[bemActive]"
// tabs();
//====================================================================
// `data-da="куда,какой,когда,тип"`

// Название | Значение по - умолчанию | Описание
// ------------- | ------------- | -------------
// 	`куда (имя класса)` | _\[обязательный\]_ | Класс блока, в который нужно будет "перебросить" текущий объект.Если класс не уникален, объек перебросится в первый элемент с этим классом.
// `какой` | last | Позиция на которую нужно переместить объект внутри родителя`куда`.Кроме цифр можно указать слова`first`(в начало блока) или`last`(в конец блока)
// 	`когда` | 767 | Брейкпоинт при котором перемещать объект.
// `тип` * | max | Тип срабатывания брейкпоинта.max - Desktop First, min - Mobile First. * При использовании`min` в некоторых(редких) ситуациях может возникнуть неточность порядка вывода элементов.

// e.x. data-da="item,2,992"
// dynamic();
//====================================================================
// observer();
//====================================================================
/*
// SPOLLERS
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

// spollers();
//====================================================================
//data-select
//.block__item
//.block__panel
// select();

// //====GOTO=SECTION===========================================================
//data-goto-section="selector"
//чтобы сделать отступ сверху нужно добавить класс .fixed для header или любого друго-го тега
// gotoSection();
// //===========================================================================

// //ActionsOnHash
// if (location.hash) {
// 	const hsh = location.hash.replace('#', '');
// 	if (document.querySelector('.popup_' + hsh)) {
// 		popup_open(hsh);
// 	} else if (document.querySelector('div.' + hsh)) {
// 		_goto(document.querySelector('.' + hsh), 500, '');
// 	}
// }
// //=================
// menu();

// //=================
// //BodyLock

// //=================
// // LettersAnimation

// //=================
// //Tabs

// //=================

// //=================

// //=================
// //DigiFormat
// function digi(str) {
// 	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
// 	return r;
// }
// //=================

// //=================

// //=================
// //SlideToggle

// //========================================
// //Wrap
// function _wrap(el, wrapper) {
// 	el.parentNode.insertBefore(wrapper, el);
// 	wrapper.appendChild(el);
// }
// //========================================
// //RemoveClasses
// function _removeClasses(el, class_name) {
// 	for (var i = 0; i < el.length; i++) {
// 		el[i].classList.remove(class_name);
// 	}
// }
// //========================================
// //IsHidden
// function _is_hidden(el) {
// 	return el.offsetParent === null;
// }
// // ShowMore Beta ========================
// let moreBlocks = document.querySelectorAll('._more-block');
// if (moreBlocks.length > 0) {
// 	let wrapper = document.querySelector('.wrapper');
// 	for (let index = 0; index < moreBlocks.length; index++) {
// 		const moreBlock = moreBlocks[index];
// 		let items = moreBlock.querySelectorAll('._more-item');
// 		if (items.length > 0) {
// 			let itemsMore = moreBlock.querySelector('._more-link');
// 			let itemsContent = moreBlock.querySelector('._more-content');
// 			let itemsView = itemsContent.getAttribute('data-view');
// 			if (
// 				getComputedStyle(itemsContent).getPropertyValue(
// 					'transition-duration',
// 				) === '0s'
// 			) {
// 				itemsContent.style.cssText = 'transition-duration: 1ms';
// 			}
// 			itemsMore.addEventListener('click', function (e) {
// 				if (itemsMore.classList.contains('_active')) {
// 					setSize();
// 				} else {
// 					setSize('start');
// 				}
// 				itemsMore.classList.toggle('_active');
// 				e.preventDefault();
// 			});

// 			let isScrollStart;
// 			function setSize(type) {
// 				let resultHeight;
// 				let itemsContentHeight = 0;
// 				let itemsContentStartHeight = 0;

// 				for (let index = 0; index < items.length; index++) {
// 					if (index < itemsView) {
// 						itemsContentHeight += items[index].offsetHeight;
// 					}
// 					itemsContentStartHeight += items[index].offsetHeight;
// 				}
// 				resultHeight =
// 					type === 'start' ? itemsContentStartHeight : itemsContentHeight;
// 				isScrollStart = window.innerWidth - wrapper.offsetWidth;
// 				itemsContent.style.height = `${resultHeight}px`;
// 			}

// 			itemsContent.addEventListener('transitionend', updateSize, false);

// 			function updateSize() {
// 				let isScrollEnd = window.innerWidth - wrapper.offsetWidth;
// 				if (
// 					(isScrollStart === 0 && isScrollEnd > 0) ||
// 					(isScrollStart > 0 && isScrollEnd === 0)
// 				) {
// 					if (itemsMore.classList.contains('_active')) {
// 						setSize('start');
// 					} else {
// 						setSize();
// 					}
// 				}
// 			}
// 			window.addEventListener('resize', function (e) {
// 				if (!itemsMore.classList.contains('_active')) {
// 					setSize();
// 				} else {
// 					setSize('start');
// 				}
// 			});
// 			setSize();
// 		}
// 	}
// }
// //========================================
// //Animate
// function animate({ timing, draw, duration }) {
// 	let start = performance.now();
// 	requestAnimationFrame(function animate(time) {
// 		// timeFraction изменяется от 0 до 1
// 		let timeFraction = (time - start) / duration;
// 		if (timeFraction > 1) timeFraction = 1;

// 		// вычисление текущего состояния анимации
// 		let progress = timing(timeFraction);

// 		draw(progress); // отрисовать её

// 		if (timeFraction < 1) {
// 			requestAnimationFrame(animate);
// 		}
// 	});
// }
// function makeEaseOut(timing) {
// 	return function (timeFraction) {
// 		return 1 - timing(1 - timeFraction);
// 	};
// }
// function makeEaseInOut(timing) {
// 	return function (timeFraction) {
// 		if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
// 		else return (2 - timing(2 * (1 - timeFraction))) / 2;
// 	};
// }
// function quad(timeFraction) {
// 	return Math.pow(timeFraction, 2);
// }
// function circ(timeFraction) {
// 	return 1 - Math.sin(Math.acos(timeFraction));
// }
// /*
// animate({
// 	duration: 1000,
// 	timing: makeEaseOut(quad),
// 	draw(progress) {
// 		window.scroll(0, start_position + 400 * progress);
// 	}
// });*/

// //Полифилы
// (function () {
// 	// проверяем поддержку
// 	if (!Element.prototype.closest) {
// 		// реализуем
// 		Element.prototype.closest = function (css) {
// 			var node = this;
// 			while (node) {
// 				if (node.matches(css)) return node;
// 				else node = node.parentElement;
// 			}
// 			return null;
// 		};
// 	}
// })();
// (function () {
// 	// проверяем поддержку
// 	if (!Element.prototype.matches) {
// 		// определяем свойство
// 		Element.prototype.matches =
// 			Element.prototype.matchesSelector ||
// 			Element.prototype.webkitMatchesSelector ||
// 			Element.prototype.mozMatchesSelector ||
// 			Element.prototype.msMatchesSelector;
// 	}
// })();

// function check_if_mobile() {
// 	if (window.innerWidth < 1000) {
// 		return true;
// 	}
// 	return false;
// }
// check_if_mobile();
// let mainLinks = document.querySelectorAll('.form-main-screen__input'),
// 	calculator_image = document.querySelector('.calculator-image'),
// 	main_location = document.querySelector('.form-main-screen__location'),
// 	main_locationtwo = document.querySelector('.form-main-screen__location-two'),
// 	arrows = document.querySelectorAll('.form-main-screen__icon-arrow');
// document.body.addEventListener('click', (e) => {
// 	if (e.target.classList.contains('calc-input')) {
// 		// console.log(check_if_mobile())
// 		mainLinks[0].classList.add('_active');
// 		mainLinks[1].classList.add('_active');
// 		calculator_image.classList.add('_active');

// 		main_location.classList.add('_hidden');

// 		main_locationtwo.classList.add('_hidden');

// 		arrows[0].classList.add('_hidden');
// 		arrows[1].classList.add('_hidden');
// 		if (check_if_mobile()) {
// 			calculator_image.classList.add('hidden');
// 		}
// 	} else {
// 		calculator_image.classList.remove('hidden');
// 		if (
// 			mainLinks[0].value.trim().length > 0 ||
// 			mainLinks[1].value.trim().length > 0
// 		) {
// 			//
// 		} else {
// 			mainLinks[0].classList.remove('_active');
// 			mainLinks[1].classList.remove('_active');
// 			calculator_image.classList.remove('_active');
// 			main_location.classList.remove('_hidden');

// 			main_locationtwo.classList.remove('_hidden');

// 			arrows[0].classList.remove('_hidden');
// 			arrows[1].classList.remove('_hidden');
// 		}
// 	}
// });

// //========================================================================================================================================================

// // $(document).ready(function () {
// // 	$(".address").suggestions({
// // 		token: "4a1c1d7e95da7126dc92dbdde85b35085fac5205",
// // 		type: "ADDRESS",
// // 		/* Вызывается, когда пользователь выбирает одну из подсказок */
// // 		onSelect: function (suggestion) {
// // 			console.log(suggestion);
// // 		}
// // 	});
// // });

// //========================================================================================================================================================

// // $('.form-main-screen__input').on('click', function () {
// // 	const viewportWidth = window.innerWidth;
// // 	if (viewportWidth < 992) {
// // 		$('html,body').animate({
// // 			scrollTop:
// // 				$('.form-main-screen__input').offset().top + "px"
// // 		}, {
// // 			duration: 1E3
// // 		});
// // 	};
// // });
// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// async function form_submit(e) {
// 	let btn = e.target;
// 	let form = btn.closest('form');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		let formAction = form.getAttribute('action')
// 			? form.getAttribute('action').trim()
// 			: '#';
// 		let formMethod = form.getAttribute('method')
// 			? form.getAttribute('method').trim()
// 			: 'GET';
// 		const message = form.getAttribute('data-message');
// 		const ajax = form.getAttribute('data-ajax');

// 		//SendForm
// 		if (ajax) {
// 			e.preventDefault();
// 			let formData = new FormData(form);
// 			form.classList.add('_sending');
// 			let response = await fetch(formAction, {
// 				method: formMethod,
// 				body: formData,
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				form.classList.remove('_sending');
// 				if (message) {
// 					popup_open('_' + message + '-message');
// 				}
// 				form_clean(form);
// 			} else {
// 				alert('Ошибка');
// 				form.classList.remove('_sending');
// 			}
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		e.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (
// 		input.getAttribute('name') == 'email' ||
// 		input.classList.contains('_email')
// 	) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(' ', '');
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (
// 		input.getAttribute('type') == 'checkbox' &&
// 		input.checked == false
// 	) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML(
// 			'beforeend',
// 			'<div class="form__error">' + input_error_text + '</div>',
// 		);
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// //viewPass
// let viewPass = document.querySelectorAll('._viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener('click', function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement
// 				.querySelector('input')
// 				.setAttribute('type', 'password');
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute('type', 'text');
// 		}
// 		element.classList.toggle('_active');
// 	});
// }

// //Select

// //Placeholers
// let inputs = document.querySelectorAll(
// 	'input[data-value],textarea[data-value]',
// );
// inputs_init(inputs);

// function inputs_init(inputs) {
// 	if (inputs.length > 0) {
// 		for (let index = 0; index < inputs.length; index++) {
// 			const input = inputs[index];
// 			const input_g_value = input.getAttribute('data-value');
// 			input_placeholder_add(input);
// 			if (input.value != '' && input.value != input_g_value) {
// 				input_focus_add(input);
// 			}
// 			input.addEventListener('focus', function (e) {
// 				if (input.value == input_g_value) {
// 					input_focus_add(input);
// 					input.value = '';
// 				}
// 				if (input.getAttribute('data-type') === 'pass') {
// 					if (input.parentElement.querySelector('._viewpass')) {
// 						if (
// 							!input.parentElement
// 								.querySelector('._viewpass')
// 								.classList.contains('_active')
// 						) {
// 							input.setAttribute('type', 'password');
// 						}
// 					} else {
// 						input.setAttribute('type', 'password');
// 					}
// 				}
// 				if (input.classList.contains('_date')) {
// 					/*
// 					input.classList.add('_mask');
// 					Inputmask("99.99.9999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 					*/
// 				}
// 				if (input.classList.contains('_phone')) {
// 					//'+7(999) 999 9999'
// 					//'+38(999) 999 9999'
// 					//'+375(99)999-99-99'
// 					input.classList.add('_mask');
// 					Inputmask('+7(___) ___ ____', {
// 						//"placeholder": '+7(___) ___ ____',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						},
// 					}).mask(input);
// 				}
// 				if (input.classList.contains('_digital')) {
// 					input.classList.add('_mask');
// 					Inputmask('9{1,}', {
// 						placeholder: '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						},
// 					}).mask(input);
// 				}
// 				form_remove_error(input);
// 			});
// 			input.addEventListener('blur', function (e) {
// 				if (input.value == '') {
// 					input.value = input_g_value;
// 					input_focus_remove(input);
// 					if (input.classList.contains('_mask')) {
// 						input_clear_mask(input, input_g_value);
// 					}
// 					if (input.getAttribute('data-type') === 'pass') {
// 						input.setAttribute('type', 'text');
// 					}
// 				}
// 			});
// 			if (input.classList.contains('_date')) {
// 				const calendarItem = datepicker(input, {
// 					customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
// 					customMonths: [
// 						'Янв',
// 						'Фев',
// 						'Мар',
// 						'Апр',
// 						'Май',
// 						'Июн',
// 						'Июл',
// 						'Авг',
// 						'Сен',
// 						'Окт',
// 						'Ноя',
// 						'Дек',
// 					],
// 					overlayButton: 'Применить',
// 					overlayPlaceholder: 'Год (4 цифры)',
// 					startDay: 1,
// 					formatter: (input, date, instance) => {
// 						const value = date.toLocaleDateString();
// 						input.value = value;
// 					},
// 					onSelect: function (input, instance, date) {
// 						input_focus_add(input.el);
// 					},
// 				});
// 				const dataFrom = input.getAttribute('data-from');
// 				const dataTo = input.getAttribute('data-to');
// 				if (dataFrom) {
// 					calendarItem.setMin(new Date(dataFrom));
// 				}
// 				if (dataTo) {
// 					calendarItem.setMax(new Date(dataTo));
// 				}
// 			}
// 		}
// 	}
// }
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }
// let scr_body = document.querySelector('body');
// let scr_blocks = document.querySelectorAll('._scr-sector');
// let scr_items = document.querySelectorAll('._scr-item');
// let scr_fix_block = document.querySelectorAll('._side-wrapper');
// let scr_min_height = 750;

// let scrolling = true;
// let scrolling_full = true;

// let scrollDirection = 0;

// let currentScroll;

// //ScrollOnScroll
// window.addEventListener('scroll', scroll_scroll);
// function scroll_scroll() {
// 	let src_value = (currentScroll = pageYOffset);
// 	let header = document.querySelector('header.header');
// 	if (header !== null) {
// 		if (src_value > 10) {
// 			header.classList.add('_scroll');
// 		} else {
// 			header.classList.remove('_scroll');
// 		}
// 	}
// 	if (scr_blocks.length > 0) {
// 		for (let index = 0; index < scr_blocks.length; index++) {
// 			let block = scr_blocks[index];
// 			let block_offset = offset(block).top;
// 			let block_height = block.offsetHeight;

// 			/*
// 			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
// 				let scrProcent = (src_value - block_offset) / block_height * 100;
// 				scrParallax(block, scrProcent, block_height);
// 			}
// 			*/

// 			if (
// 				pageYOffset > block_offset - window.innerHeight / 1.5 &&
// 				pageYOffset < block_offset + block_height - window.innerHeight / 5
// 			) {
// 				block.classList.add('_scr-sector_active');
// 			} else {
// 				if (block.classList.contains('_scr-sector_active')) {
// 					block.classList.remove('_scr-sector_active');
// 				}
// 			}
// 			if (
// 				pageYOffset > block_offset - window.innerHeight / 2 &&
// 				pageYOffset < block_offset + block_height - window.innerHeight / 5
// 			) {
// 				if (!block.classList.contains('_scr-sector_current')) {
// 					block.classList.add('_scr-sector_current');
// 				}
// 			} else {
// 				if (block.classList.contains('_scr-sector_current')) {
// 					block.classList.remove('_scr-sector_current');
// 				}
// 			}
// 		}
// 	}
// 	if (scr_items.length > 0) {
// 		for (let index = 0; index < scr_items.length; index++) {
// 			let scr_item = scr_items[index];
// 			let scr_item_offset = offset(scr_item).top;
// 			let scr_item_height = scr_item.offsetHeight;

// 			let scr_item_point =
// 				window.innerHeight - (window.innerHeight - scr_item_height / 3);
// 			if (window.innerHeight > scr_item_height) {
// 				scr_item_point = window.innerHeight - scr_item_height / 3;
// 			}

// 			if (
// 				src_value > scr_item_offset - scr_item_point &&
// 				src_value < scr_item_offset + scr_item_height
// 			) {
// 				scr_item.classList.add('_active');
// 				scroll_load_item(scr_item);
// 			} else {
// 				scr_item.classList.remove('_active');
// 			}
// 			if (src_value > scr_item_offset - window.innerHeight) {
// 				if (scr_item.querySelectorAll('._lazy').length > 0) {
// 					scroll_lazy(scr_item);
// 				}
// 			}
// 		}
// 	}
// 	if (scr_fix_block.length > 0) {
// 		fix_block(scr_fix_block, src_value);
// 	}
// 	let custom_scroll_line = document.querySelector('._custom-scroll__line');
// 	if (custom_scroll_line) {
// 		let window_height = window.innerHeight;
// 		let content_height = document.querySelector('.wrapper').offsetHeight;
// 		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
// 		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
// 		custom_scroll_line.style.transform =
// 			'translateY(' +
// 			((window_height - custom_scroll_line_height) / 100) * scr_procent +
// 			'px)';
// 	}
// 	if (src_value > scrollDirection) {
// 		// downscroll code
// 	} else {
// 		// upscroll code
// 	}
// 	scrollDirection = src_value <= 0 ? 0 : src_value;
// }
// setTimeout(function () {
// 	//document.addEventListener("DOMContentLoaded", scroll_scroll);
// 	scroll_scroll();
// }, 100);

// function scroll_lazy(scr_item) {
// 	/*
// 	let lazy_src = scr_item.querySelectorAll('*[data-src]');
// 	if (lazy_src.length > 0) {
// 		for (let index = 0; index < lazy_src.length; index++) {
// 			const el = lazy_src[index];
// 			if (!el.classList.contains('_loaded')) {
// 				el.setAttribute('src', el.getAttribute('data-src'));
// 				el.classList.add('_loaded');
// 			}
// 		}
// 	}
// 	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
// 	if (lazy_srcset.length > 0) {
// 		for (let index = 0; index < lazy_srcset.length; index++) {
// 			const el = lazy_srcset[index];
// 			if (!el.classList.contains('_loaded')) {
// 				el.setAttribute('srcset', el.getAttribute('data-srcset'));
// 				el.classList.add('_loaded');
// 			}
// 		}
// 	}
// 	*/
// 	/*
// 	window.onload = () => {
// 		const observer = new IntersectionObserver((entries, observer) => {
// 			entries.forEach(entry => {
// 				if (entry.isIntersecting) {
// 					console.log(entry)
// 					// ссылка на оригинальное изображение хранится в атрибуте "data-src"
// 					entry.target.src = entry.target.dataset.src
// 					observer.unobserve(entry.target)
// 				}
// 			})
// 		}, { threshold: 0.5 })

// 		document.querySelectorAll('img').forEach(img => observer.observe(img))
// 	}
// 	*/
// }
// function scroll_load_item(scr_item) {
// 	if (
// 		scr_item.classList.contains('_load-map') &&
// 		!scr_item.classList.contains('_loaded-map')
// 	) {
// 		let map_item = document.getElementById('map');
// 		if (map_item) {
// 			scr_item.classList.add('_loaded-map');
// 			map();
// 		}
// 	}
// }
// function scrParallax(block, scrProcent, blockHeight) {
// 	let prlxItems = block.querySelectorAll('._prlx-item');
// 	if (prlxItems.length > 0) {
// 		for (let index = 0; index < prlxItems.length; index++) {
// 			const prlxItem = prlxItems[index];
// 			let prlxItemAttr = prlxItem.dataset.prlx ? prlxItem.dataset.prlx : 3;
// 			const prlxItemValue =
// 				-1 * (((blockHeight / 100) * scrProcent) / prlxItemAttr);
// 			prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
// 		}
// 	}
// }
// //FullScreenScroll
// if (scr_blocks.length > 0 && !isMobile.any()) {
// 	disableScroll();
// 	window.addEventListener('wheel', full_scroll);

// 	let swiperScrolls = document.querySelectorAll('._swiper_scroll');

// 	if (swiperScrolls.length > 0) {
// 		for (let index = 0; index < swiperScrolls.length; index++) {
// 			const swiperScroll = swiperScrolls[index];
// 			swiperScroll.addEventListener('mouseenter', function (e) {
// 				window.removeEventListener('wheel', full_scroll);
// 			});
// 			swiperScroll.addEventListener('mouseleave', function (e) {
// 				window.addEventListener('wheel', full_scroll);
// 			});
// 		}
// 	}
// }
// function getPrevBlockPos(current_block_prev) {
// 	let viewport_height = window.innerHeight;
// 	let current_block_prev_height = current_block_prev.offsetHeight;
// 	let block_pos = offset(current_block_prev).top;

// 	if (current_block_prev_height >= viewport_height) {
// 		block_pos = block_pos + (current_block_prev_height - viewport_height);
// 	}
// 	return block_pos;
// }
// function full_scroll(e) {
// 	let viewport_height = window.innerHeight;
// 	if (viewport_height >= scr_min_height) {
// 		if (scrolling_full) {
// 			let current_block = document.querySelector(
// 				'._scr-sector._scr-sector_current',
// 			);
// 			let current_block_pos = offset(current_block).top;
// 			let current_block_height = current_block.offsetHeight;
// 			let current_block_next = current_block.nextElementSibling;
// 			let current_block_prev = current_block.previousElementSibling;
// 			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
// 				if (current_block_height <= viewport_height) {
// 					if (current_block_prev) {
// 						full_scroll_to_sector(getPrevBlockPos(current_block_prev));
// 					}
// 				} else {
// 					enableScroll();
// 					if (currentScroll <= current_block_pos) {
// 						if (current_block_prev) {
// 							full_scroll_to_sector(getPrevBlockPos(current_block_prev));
// 						}
// 					}
// 				}
// 			} else if (
// 				e.keyCode == 38 ||
// 				e.keyCode == 33 ||
// 				e.deltaX < 0 ||
// 				e.deltaY > 0
// 			) {
// 				if (current_block_height <= viewport_height) {
// 					if (current_block_next) {
// 						let block_pos = offset(current_block_next).top;
// 						full_scroll_to_sector(block_pos);
// 					}
// 				} else {
// 					enableScroll();
// 					if (current_block_next) {
// 						let block_pos = offset(current_block_next).top;
// 						if (currentScroll >= block_pos - viewport_height) {
// 							full_scroll_to_sector(block_pos);
// 						}
// 					}
// 				}
// 			}
// 		} else {
// 			disableScroll();
// 		}
// 	} else {
// 		enableScroll();
// 	}
// }
// function full_scroll_to_sector(pos) {
// 	disableScroll();
// 	scrolling_full = false;
// 	_goto(pos, 800);

// 	let scr_pause = 500;
// 	if (navigator.appVersion.indexOf('Mac') != -1) {
// 		scr_pause = 1000;
// 	}
// 	setTimeout(function () {
// 		scrolling_full = true;
// 	}, scr_pause);
// }
// function full_scroll_pagestart() {}
// function full_scroll_pageend() {}

// //SameFunctions
// function offset(el) {
// 	var rect = el.getBoundingClientRect(),
// 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
// }
// function disableScroll() {
// 	if (window.addEventListener)
// 		// older FF
// 		window.addEventListener('DOMMouseScroll', preventDefault, false);
// 	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
// 	window.onwheel = preventDefault; // modern standard
// 	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
// 	window.ontouchmove = preventDefault; // mobile
// 	document.onkeydown = preventDefaultForScrollKeys;
// }
// function enableScroll() {
// 	if (window.removeEventListener)
// 		window.removeEventListener('DOMMouseScroll', preventDefault, false);
// 	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
// 	window.onmousewheel = document.onmousewheel = null;
// 	window.onwheel = null;
// 	window.ontouchmove = null;
// 	document.onkeydown = null;
// }
// function preventDefault(e) {
// 	e = e || window.event;
// 	if (e.preventDefault) e.preventDefault();
// 	e.returnValue = false;
// }
// function preventDefaultForScrollKeys(e) {
// 	/*if (keys[e.keyCode]) {
// 		preventDefault(e);
// 		return false;
// 	}*/
// }

// function fix_block(scr_fix_block, scr_value) {
// 	let window_width = parseInt(window.innerWidth);
// 	let window_height = parseInt(window.innerHeight);
// 	let header_height =
// 		parseInt(document.querySelector('header').offsetHeight) + 15;
// 	for (let index = 0; index < scr_fix_block.length; index++) {
// 		const block = scr_fix_block[index];
// 		let block_width = block.getAttribute('data-width');
// 		const item = block.querySelector('._side-block');
// 		if (!block_width) {
// 			block_width = 0;
// 		}
// 		if (window_width > block_width) {
// 			if (item.offsetHeight < window_height - (header_height + 30)) {
// 				if (scr_value > offset(block).top - (header_height + 15)) {
// 					item.style.cssText =
// 						'position:fixed;bottom:auto;top:' +
// 						header_height +
// 						'px;width:' +
// 						block.offsetWidth +
// 						'px;left:' +
// 						offset(block).left +
// 						'px;';
// 				} else {
// 					gotoRelative(item);
// 				}
// 				if (
// 					scr_value >
// 					block.offsetHeight +
// 						offset(block).top -
// 						(item.offsetHeight + (header_height + 15))
// 				) {
// 					block.style.cssText = 'position:relative;';
// 					item.style.cssText =
// 						'position:absolute;bottom:0;top:auto;left:0px;width:100%';
// 				}
// 			} else {
// 				gotoRelative(item);
// 			}
// 		}
// 	}
// 	function gotoRelative(item) {
// 		item.style.cssText = 'position:relative;bottom:auto;top:0px;left:0px;';
// 	}
// }

// if (!isMobile.any()) {
// 	//custom_scroll();
// 	/*
// 	window.addEventListener('wheel', scroll_animate, {
// 		capture: true,
// 		passive: true
// 	});
// 	window.addEventListener('resize', custom_scroll, {
// 		capture: true,
// 		passive: true
// 	});
// 	*/
// }
// function custom_scroll(event) {
// 	scr_body.style.overflow = 'hidden';
// 	let window_height = window.innerHeight;
// 	let custom_scroll_line = document.querySelector('._custom-scroll__line');
// 	let custom_scroll_content_height =
// 		document.querySelector('.wrapper').offsetHeight;
// 	let custom_cursor_height = Math.min(
// 		window_height,
// 		Math.round(window_height * (window_height / custom_scroll_content_height)),
// 	);
// 	if (custom_scroll_content_height > window_height) {
// 		if (!custom_scroll_line) {
// 			let custom_scroll = document.createElement('div');
// 			custom_scroll_line = document.createElement('div');
// 			custom_scroll.setAttribute('class', '_custom-scroll');
// 			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
// 			custom_scroll.appendChild(custom_scroll_line);
// 			scr_body.appendChild(custom_scroll);
// 		}
// 		custom_scroll_line.style.height = custom_cursor_height + 'px';
// 	}
// }

// let new_pos = pageYOffset;
// function scroll_animate(event) {
// 	let window_height = window.innerHeight;
// 	let content_height = document.querySelector('.wrapper').offsetHeight;
// 	let start_position = pageYOffset;
// 	let pos_add = 100;

// 	if (
// 		event.keyCode == 40 ||
// 		event.keyCode == 34 ||
// 		event.deltaX > 0 ||
// 		event.deltaY < 0
// 	) {
// 		new_pos = new_pos - pos_add;
// 	} else if (
// 		event.keyCode == 38 ||
// 		event.keyCode == 33 ||
// 		event.deltaX < 0 ||
// 		event.deltaY > 0
// 	) {
// 		new_pos = new_pos + pos_add;
// 	}
// 	if (new_pos > content_height - window_height)
// 		new_pos = content_height - window_height;
// 	if (new_pos < 0) new_pos = 0;

// 	if (scrolling) {
// 		scrolling = false;
// 		_goto(new_pos, 1000);

// 		let scr_pause = 100;
// 		if (navigator.appVersion.indexOf('Mac') != -1) {
// 			scr_pause = scr_pause * 2;
// 		}
// 		setTimeout(function () {
// 			scrolling = true;
// 			_goto(new_pos, 1000);
// 		}, scr_pause);
// 	}
// 	//If native scroll
// 	//disableScroll();
// }

let body = document.body,
	html = document.documentElement;

let height = Math.max(
	body.scrollHeight,
	body.offsetHeight,
	html.clientHeight,
	html.scrollHeight,
	html.offsetHeight,
);

const header = document.querySelector('.header');
if (header) {
	if (height > 500) {
		window.addEventListener('scroll', (e) => {
			if (window.pageYOffset > 200) {
				header.classList.add('fixed');
				document.body.style.paddingTop = `${header.offsetHeight}px`;
			} else {
				header.classList.remove('fixed');
				document.body.style.paddingTop = `0px`;
			}
		});
	}
}

const modalBtnCreate = document.querySelectorAll('[data-modal]');
if (modalBtnCreate.length > 0) {
	modalBtnCreate.forEach((btn) => {
		const modal = document.querySelector(`.${btn.dataset.modal}`);

		btn.addEventListener('click', (e) => {
			openModal();
		});

		modal.addEventListener('click', (e) => {
			if (e.target.closest('.modal__close')) {
				closeModal();
			}

			if (!e.target.closest('.modal__body')) {
				closeModal();
			}
		});
		const openModal = () => {
			modal.setAttribute('open', true);
			document.body.style.paddingRight = `${
				window.innerWidth - document.body.clientWidth
			}px`;
			document.body.style.overflow = 'hidden';
		};
		const closeModal = () => {
			modal.removeAttribute('open');
			document.body.style.overflow = 'visible';
			document.body.style.paddingRight = 0;
		};
	});
}

// const mapHoverElements = document.querySelectorAll('[data-people-map]');

// if (mapHoverElements.length > 0) {
// 	mapHoverElements.forEach((element) => {
// 		element.addEventListener('mouseenter', (e) => {
// 			document
// 				.querySelector(`[data-people="${element.dataset.peopleMap}"]`)
// 				.classList.add('active');
// 			document.querySelector(`[data-people="block"]`).classList.remove('block');
// 		});
// 		element.addEventListener('mouseleave', (e) => {
// 			removeClassess(document.querySelectorAll(`[data-people]`), 'active');
// 			document.querySelector(`[data-people="block"]`).classList.add('block');
// 		});
// 	});
// 	const removeClassess = (arr, className) => {
// 		arr.forEach((item) => {
// 			if (!item.dataset.block) item.classList.remove(className);
// 		});
// 	};
// }
//========================================================================================================================================================
// const i = () => {
// 	const e = document.querySelector('.swiper').parentElement.offsetWidth;
// 	const r = document.querySelector('.swiper').offsetWidth;
// 	let t = (e - (e - r) / 2) / r;
// 	return (t = Math.max(t, 1)), 100 * t + '%';
// };

if (document.querySelector('.swiper')) {
	const swiper = new Swiper('.swiper', {
		autoplay: {
			delay: 2000,
		},
		effect: 'creative',
		speed: 600,
		resistanceRatio: 0,
		grabCursor: !0,
		parallax: !0,
		creativeEffect: {
			limitProgress: 3,
			perspective: !0,
			prev: {
				translate: ['-20%', 0, -200],
			},
			next: {
				translate: ['20%', 0, -200],
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	swiper.slideNext(0);
}

//========================================================================================================================================================

const filterBtns = document.querySelectorAll('[data-filter-btn]');

if (filterBtns.length > 0) {
	filterBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const cardsCurrent = document.querySelectorAll(
				`[data-filter-card=${btn.dataset.filterBtn}]`,
			);
			const cards = document.querySelectorAll(`[data-filter-card]`);
			if (btn.dataset.filterBtn == 'all') {
				cards.forEach((card) => {
					card.classList.add('active');
				});
				return;
			}

			activeBtnFilter(filterBtns, btn);
			hideFilterCards(cards);
			showFilterCards(cardsCurrent);
		});
	});

	const showFilterCards = (cards) => {
		cards.forEach((card) => {
			card.classList.add('active');
		});
	};

	const hideFilterCards = (cards) => {
		cards.forEach((card) => {
			card.classList.remove('active');
		});
	};

	const activeBtnFilter = (btns, btnCurr) => {
		btns.forEach((btn) => {
			btn.classList.remove('btn--filled');
			btn.classList.add('btn--border');
		});
		btnCurr.classList.remove('btn--border');
		btnCurr.classList.add('btn--filled');
	};
}

//========================================================================================================================================================

const paymanetbtns = document.querySelectorAll('.pay-summ-select');

if (paymanetbtns.length > 0) {
	paymanetbtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			removeClassess(paymanetbtns);
			btn.classList.add('pay-summ-select--active');
		});
	});
	const removeClassess = (btns) => {
		btns.forEach((btn) => {
			btn.classList.remove('pay-summ-select--active');
		});
	};
}
