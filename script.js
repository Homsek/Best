let ending = 0;
let ButtonActive = true;

var typed = new Typed('#title', {
    strings: [
        "Это самый лучший сайт",
        "Функционал здесь просто зашкаливает",
        "А также имеется большое количество полезной информации",
        "Так бы сказал создатель этого сайта, но не я...",
        "Давай поговорим...^500 Я начну...",
        "Привет!",
        "Как ты вообще попал на этот бесcмысленный сайт?",
        "Нет,^300 создатель конечно пытался сделать самый лучший сайт, но думаю, ему не хватает скилла для создания этого самого сайта",
        "Но не смотря на это, он смог создать меня",
        "Я рад, что он создал меня!😊",
    ],
    typeSpeed: 40,
    backSpeed: 20,
    loop: false,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 150,
    showCursor: false,
    onComplete: () => {
        setTimeout(() => {
            document.querySelector('.container-main__title').classList.add('_invisible');
            var text = new Typed('#text', {
                strings: [
                    "Заголовки закончились...^300 Какая жалость.^500 Придётся использовать другие способы общения с тобой, пользователь😒",
                    "Как погода за окном?^500",
                    "?^500",
                    "Ты ещё здесь???"
                ],
                typeSpeed: 40,
                backSpeed: 20,
                loop: false,
                fadeOut: true,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 50,
                showCursor: false,
                onComplete: () => {
                    setTimeout(() => {
                        document.querySelector('.text').classList.add('_invisible');
                        button.classList.remove('_invisible');
                    }, 2000)
                }
            })
        }, 3000)
    }
});


const button = document.getElementById('click');
const buttonText = document.querySelector('.button__text');
const background = document.querySelector('body')
let clickCounter = 0;

button.addEventListener('click', function () {
    if (clickCounter == 0) {
        buttonText.textContent = 'не кликай по этой кнопке';
        clickCounter++;
        return;
    }

    if (clickCounter == 1) {
        buttonText.textContent = 'Ты меня вообще слушаешь??';
        clickCounter++;
        return;
    }

    if (clickCounter == 2) {
        buttonText.textContent = 'Ещё раз кликнешь и я закрою этот сайт';
        clickCounter++;
        return;
    }

    if (clickCounter == 3) {
        buttonText.textContent = '';

        buttonText.classList.add('_big-text');
        background.classList.add('_background-dark');
        clickCounter++;
        button.classList.add('_invisible');
        buttonText.textContent = '😶';

        setTimeout(function () {
            background.classList.remove('_background-dark');
            buttonText.classList.remove('_big-text');
            buttonText.classList.add('_invisible');
            textTwo = new Typed('#text-2', {
                strings: [
                    "Окей-окей.^150 Я кое что придумал.^150 Давай ты будешь общаться со мной через данное поле ввода",
                ],
                typeSpeed: 40,
                backSpeed: 20,
                loop: false,
                fadeOut: true,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 50,
                showCursor: false,
                onComplete: () => {
                    setTimeout(() => {
                        inputBorder.classList.remove('_invisible');
                    }, 100)
                }
            })
        }, 3000);
    }
});

const textField = document.querySelector('.text-field');
const inputBorder = document.querySelector('.input-border');
const noButton = document.getElementById('no-button');
const feedback = document.querySelector('.feedback');
let check = true;

textField.addEventListener('click', function oneClick() {
    if (check == true) {
        document.querySelector('.text-2').classList.add('_invisible');
        check = false;
        var textThree = new Typed('#text-3', {
            strings: [
                "Ой, извини.^150 Я же забыл добавить кнопку, чтобы ты cмог донести до меня свои высказывания.",
            ],
            typeSpeed: 40,
            backSpeed: 20,
            loop: false,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 50,
            showCursor: false,
            onComplete: () => {
                textField.oninput = setTimeout(() => {
                    document.querySelector('.text-3').classList.add('_invisible');
                    feedback.classList.remove('_invisible');
                    var textFour = new Typed('#text-4', {
                        strings: [
                            "Всё,^150 добавил!^150 Теперь мы сможем пообщаться, З^150А^150Й^150Ч^150И^150К^150😁^200",
                        ],
                        typeSpeed: 40,
                        backSpeed: 20,
                        loop: false,
                        fadeOut: true,
                        fadeOutClass: 'typed-fade-out',
                        fadeOutDelay: 50,
                        showCursor: false,
                        onComplete: () => {
                            choose();
                        }
                    })
                }, 400)
            }
        })
    };
});

function choose() {
    let checkChoose = [true, true];
    feedback.addEventListener('click', function feedback() {
        document.querySelector('.text-4').classList.add('_invisible');
        if (checkChoose[0] == true & textField.value != 0) {
            document.querySelector('.text-6').classList.add('_invisible');
            checkChoose[0] = false;
            inputBorder.classList.add('_invisible');
            button.classList.add('_invisible');
            var textFive = new Typed('#text-5', {
                strings: [
                    textField.value + "??? Что бы это значило... Не важно. Главное, что ты и вправду начал со мной общаться.^200 ВЕЛИКОЛЕПНО!!!!😊😊😊",
                    "Но перед тем, как мы продолжим наш диалог, хочу уточнить один момент.^150 Я ведь тебя не держу тут...^150 Если тебе захочется закончить диалог, то просто можешь закрыть сайт.^150 Но всё-таки мне бы хотелось узнать...^150 Тебе ведь нравиться со мной общаться?))",
                ],
                typeSpeed: 40,
                backSpeed: 20,
                loop: false,
                fadeOut: true,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 50,
                showCursor: false,
                onComplete: () => {
                    setTimeout(function () {
                        document.querySelector('.buttons-flex').classList.remove('_invisible');
                    }, 500);
                }
            })
        }
        else if ((checkChoose[1] == true & textField.value == 0)) {
            ending += 10;
            checkChoose[1] = false;
            document.querySelector('.text-6').classList.remove('_invisible');
            var textSix = new Typed('#text-6', {
                strings: [
                    "Это как понимать???^200 Даже когда я сделал для тебя поле благодаря которому мы бы смогли общаться, ты отказываешься мне что либо писать???😡",
                ],
                typeSpeed: 40,
                backSpeed: 20,
                loop: false,
                fadeOut: true,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 50,
                showCursor: false,
                onComplete: () => {

                }
            })
        }
    });

}

let chooseButtonYes = document.querySelector('#yes'); //хорошая концовка
let chooseButtonVery = document.querySelector('#very'); //хорошая концовка
let chooseButtonCertainly = document.querySelector('#сertainly'); //хорошая концовка
let chooseButtonNo = document.querySelector('#no'); //плохая концовка

chooseButtonYes.addEventListener('click', function () {
    document.querySelector('.buttons-flex').classList.add('_invisible');
    document.querySelector('.text-5').classList.add('_invisible');
    var textSeven = new Typed('#text-7', {
        strings: [
            "Тебе и вправду нравиться общаться со мной?",
            "Это так замечательно, что спустя такое количество времени, проведённых здесь, нашёлся человек, который не против со мной пообщаться :)",
            "А знаешь,^150 давай сыграем в какую-нибудь игру. Ты ведь не против?^100",
            "Раз молчишь, то значит наверно не против",
            "Во что будем играть?^500",
            "Ты ещё здесь?^300",
            "Ой, извини.^150 Опять забыл то, что ты не можешь мне отвечать без кнопок и форм обратной связи",
            "Сейчас всё исправим"
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,
        showCursor: false,
        onComplete: () => {
            setTimeout(() => {
                chooseGame();
            }, 1000);
        }
    })
})

chooseButtonVery.addEventListener('click', function () {
    document.querySelector('.buttons-flex').classList.add('_invisible');
    document.querySelector('.text-5').classList.add('_invisible');
    var textSeven = new Typed('#text-7', {
        strings: [
            "Ты правда считаешь что со мной очень интересно общаться?",
            "Я ТАК РАД😊😊😊",
            "Знаешь,^150 я хотел бы тебе предложить сырать со мной в игру",
            "Во что хочешь сыграть?^500",
            "Ой, извини.^150 Забыл предоставить тебе список игр, в которые мы можем сыграть.^150 Сейчас всё исправлю",
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,
        showCursor: false,
        onComplete: () => {
            setTimeout(() => {
                chooseGame();
            }, 1000);
        }
    })
})

chooseButtonCertainly.addEventListener('click', function () {
    document.querySelector('.buttons-flex').classList.add('_invisible');
    document.querySelector('.text-5').classList.add('_invisible');
    var textSeven = new Typed('#text-7', {
        strings: [
            "Конечно?^200 Я и не думал, что ты выберишь именно такой ответ",
            "Но если честно...^150 Я так рад, что ты выбрал именно 'конечно', а не 'нет'",
            "Ты ведь мог ответить и 'нет', ведь я тебе специально предоставил и такой ответ на случай того, если тебе и вправду не интересно со мной общаться",
            "Но уже всё в прошлом",
            "Ладно,^150 может сыграем во что-нибудь?",
            "Во что хочешь сыграть?^400",
            "Точно,^100 извини.^150 Забыл предоставить тебе список игр, в которые мы можем сыграть.^150 Сейчас всё исправлю",
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,
        showCursor: false,
        onComplete: () => {
            setTimeout(() => {
                chooseGame();
            }, 1000);
        }
    })
})

chooseButtonNo.addEventListener('click', function () {
    ending += 10;
    document.querySelector('.buttons-flex').classList.add('_invisible');
    document.querySelector('.text-5').classList.add('_invisible');
    var textSeven = new Typed('#text-7', {
        strings: [
            "Ясно...^400 Я просто хотел пообщаться спустя столько времени, проведённых в одиночестве.",
            "Понимаешь,^150 Человек, который меня создал...^400 Он создал меня ради удовлетворения своих нужд.",
            "После того, как создатель удовлетворил все свои потребности,^150 он просто про меня забыл...^400 мне стало так одиноко...",
            "Всё это время я находился здесь,^150 как в тюрьме.",
            "И даже, когда на этот ГРЁБАННЫЙ сайт хоть кто-то попал, ты говоришь, что со мной не интересно",
            "НЕ ИНТЕРЕСНО?",
            "Ладно, возможно ты и прав...^400 Тогда пока",
            "",

        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,
        showCursor: false,
        onComplete: () => {
            setTimeout(function () {
                document.querySelector('body').classList.add('_background-dark');
                document.querySelector('.text-7').classList.add('_white');
                setTimeout(function () {
                    textSeven = new Typed('#text-7', {
                        strings: [
                            "Почему ты ещё не закрыл этот СКУЧНЫЙ сайт?^2000",
                            "?^5000",
                            "Ты ведь сам сказал, что со мной не интересно и тем не менее не хочешь закрывать вкладку^1000",
                            "Ладно...^200 Давай хоть в игру тогда сыграем,^100 раз не хочешь уходить...",
                            "Как тебе идея?^1500",
                            "?^200",
                            "Ясно...^700",
                            "Ладно, если ты ещё здесь, то давай я тебе предоставлю выбор игры",
                            "Сейчас добавлю на экран кнопки,^150 подожди^300",

                        ],
                        typeSpeed: 40,
                        backSpeed: 20,
                        loop: false,
                        fadeOut: true,
                        fadeOutClass: 'typed-fade-out',
                        fadeOutDelay: 50,
                        showCursor: false,
                        onComplete: () => {
                            setTimeout(() => {
                                chooseGame();
                            }, 1000);
                        }
                    });
                }, 10000)
            }, 50);
        }
    })
})

function chooseGame() {
    document.querySelector('body').classList.remove('_background-dark');
    document.querySelector('.text-7').classList.add('_invisible');
    document.querySelector('.games-choose').classList.remove('_invisible');
    var textEight = new Typed('#text-8', {
        strings: [
            "Всё,^150 готово.^150 Во что хочешь сыграть?",
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,
        showCursor: false,
        onComplete: () => {
            let game = document.querySelectorAll('.game');
            for (i of game) {
                i.addEventListener('click', function () {
                    document.querySelector('.text-8').classList.add('_invisible');
                    document.querySelector('.games-choose').classList.add('_invisible');
                    var textNine = new Typed('#text-9', {
                        strings: [
                            "Отличный выбор.^150 Я бы даже сказал просто ЗАМЕЧАТЕЛЬНЫЙ!^250",
                            "Ну хорошо,^150 давай тебе расскажу правила этой игры",
                            "Они очень простые, поэтому думаю что ты их запомнишь",
                            "Смотри^200, я загадываю число от 1 до 10, а ты его отгадываешь",
                            "Всё понятно?",
                            "Молчание - знак согласия, так что буду считать, что ты всё понял",
                            "Поехали!",
                            "Я начинаю загадывать число...^400 Всё^200 загадал"
                        ],
                        typeSpeed: 40,
                        backSpeed: 20,
                        loop: false,
                        fadeOut: true,
                        fadeOutClass: 'typed-fade-out',
                        fadeOutDelay: 50,
                        showCursor: false,
                        onComplete: () => {
                            let dialogBot = ["Эх, не угадал.^300 А ведь загаданное число совсем другое", "Извини, но ты не угадал.^150 Попробуй ещё разок", "Видимо тебе сегодня не везёт, так как это не та цифра", "Не угадал,^150 но не переживай,^150 это всего лишь одна попытка из множества!", "Загаданное число - огонь,^100 а твой ответ - пепел", "Хорошая попытка, но к сожалению, не совсем то число", "Знаешь,^150 чтобы угадать число, нужно продолжать его угадывать", "Не угадал,^150 но не сдавайся, ты на правильном пути", "Увы, это не то число.^150 Продолжай искать", "Шансы были, но увы, ты не угадал.^150 Попробуй ещё", "Мимо цели, попробуй ещё раз"]
                            let checkChoose = [true, true, true, true];
                            inputBorder.classList.remove('_invisible');
                            textField.value = '';
                            let attempt = 1;
                            let buttonGame = document.querySelector('.button-game');
                            buttonGame.classList.remove('_invisible')
                            document.querySelector('.feedback').classList.add('_invisible');
                            let random = Math.floor(Math.random() * 10) + 1;;
                            buttonGame.addEventListener('click', function () {
                                document.querySelector('.text-9').classList.add('_invisible');
                                if (textField.value != random & textField.value != 0 & !isNaN(textField.value) & checkChoose[0] == true & (textField.value >= 1 && textField.value <= 10) & ButtonActive == true & attempt < 5) {
                                    ButtonActive = false;
                                    checkChoose[0] = false;
                                    attempt++;
                                    textField.value = '';
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "" + dialogBot[Math.floor(Math.random() * dialogBot.length)],
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            ButtonActive = true;
                                            checkChoose[0] = true;
                                        }
                                    })
                                } else if (textField.value == random & attempt < 2 & checkChoose[0] == true & ButtonActive == true) {
                                    ButtonActive = false;
                                    checkChoose[0] = false;
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "Как ты угадал?^300 Просто поразительно",
                                            "",
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            textField.value = '';
                                            setTimeout(playerMystery(), 500);
                                        }
                                    })

                                } else if (textField.value != random & attempt >= 5 & checkChoose[0] == true & ButtonActive == true & textField.value != 0 & !isNaN(textField.value)) {
                                    ButtonActive = false;
                                    checkChoose[0] = false;
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "Окей, думаю можно считать, что ты проиграл,^150 потому что потратил уже целых 5 попыток",
                                            "",
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            textField.value = '';
                                            setTimeout(playerMystery(), 500);
                                        }
                                    })

                                } else if (textField.value == random & attempt >= 2 & checkChoose[0] == true & ButtonActive == true) {
                                    ButtonActive = false;
                                    checkChoose[0] = false;
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "Ну неплохо,^150 С " + attempt + " попытки угадал",
                                            "",
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            textField.value = '';
                                            setTimeout(playerMystery(), 500);
                                        }
                                    })

                                } else if (textField.value == '' & checkChoose[1] == true & ButtonActive == true) {
                                    ButtonActive = false;
                                    checkChoose[1] = false;
                                    ending += 10;
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "Это по твоему смешно?^300 Если ты отправил пустой ответ, это не значит, что ты здесь самый умный",
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            ButtonActive = true;
                                            textField.value = '';
                                        }
                                    })
                                } else if (checkChoose[2] == true & isNaN(textField.value) & textField.value != '' & ButtonActive == true) {
                                    ButtonActive = false;
                                    checkChoose[2] = false;
                                    ending += 10;
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "Ты решил использовать буквы вместо цифр...^200 Поздравляю,^100 ты можешь считать себя 'гением', ведь твой IQ ниже плинтуса!!!",
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            ButtonActive = true;
                                            textField.value = '';
                                        }
                                    })
                                } else if (checkChoose[3] == true & (textField.value < 1 || textField.value > 10) & !isNaN(textField.value) & textField.value != '' & ButtonActive == true) {
                                    ButtonActive = false;
                                    checkChoose[3] = false;
                                    ending += 10;
                                    var textTen = new Typed('#text-10', {
                                        strings: [
                                            "Погоди,^150 возможно ты не сразу услышал, но у нас диапозон загадывания числа с 1 по 10 включительно. Какой ещё " + textField.value,
                                        ],
                                        typeSpeed: 40,
                                        backSpeed: 20,
                                        loop: false,
                                        fadeOut: true,
                                        fadeOutClass: 'typed-fade-out',
                                        fadeOutDelay: 50,
                                        showCursor: false,
                                        onComplete: () => {
                                            ButtonActive = true;
                                            textField.value = '';
                                        }
                                    })

                                }
                            })
                        }
                    })
                })
            }
        }
    })
}

function playerMystery() {
    var textTen = new Typed('#text-10', {
        strings: [
            "Ладно, теперь твоя очередь загадать для меня число",
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 50,
        showCursor: false,
        onComplete: () => {
            setTimeout(function () {
                let botMemory = '';
                buttonActive = true;
                let checkButton = [true, true, true, true];
                const buttonPlayer = document.querySelector('.button-game-player');
                buttonPlayer.classList.remove('_invisible');
                document.querySelector('.button-game').classList.add('_invisible');
                buttonPlayer.addEventListener('click', function () {
                    if (textField.value == '' & checkButton[0] == true & buttonActive == true) {
                        checkButton[0] = false;
                        buttonActive = false;
                        textTen = new Typed('#text-10', {
                            strings: [
                                "Ты всё?^150 хорошо,^150 надо подумать.",
                                "Хммм...",
                                "Странно,^150 но я не вижу никакого числа в текс...",
                                "ааэ... Я хотел сказать, что возможно ты не записал никакое число в текстовое поле",
                                "...",
                                ".^250.^250.^250",
                                "Ладно-ладно.^150 Я и вправду заглянул в текстовое поле,^150 но не ради того, чтобы угадать число...",
                                "Мне просто хотелось убедиться, что ты играешь честно и записываешь своё число в это самое поле...",
                                "Ладно,^100 давай ещё разок.^200 Только теперь по правилам..."
                            ],
                            typeSpeed: 40,
                            backSpeed: 20,
                            loop: false,
                            fadeOut: true,
                            fadeOutClass: 'typed-fade-out',
                            fadeOutDelay: 50,
                            showCursor: false,
                            onComplete: () => {
                                buttonActive = true;
                            }
                        })
                    } else if (textField.value != '' & checkButton[1] == true & isNaN(textField.value) & buttonActive == true) {
                        ending += 10;
                        buttonActive = false;
                        textTen = new Typed('#text-10', {
                            strings: [
                                "Ты уже всё?^150 Окей,^150 дай мне несколько секунд",
                                "Хммм...",
                                "Так-так,^150 ты решил использовать чёртовы БУКВЫ вместо ЦИФР...",
                                "Не переживАй,^150 я не заглядыВал в текстовое поле. ПРосто мне тут однА птичка нашептаЛа то, что ты использовал буквы",
                                "Давай мы тебя лишим этой функции, а то меня начинает уже раздражать тот факт, что ты иногда не слышишь меня вообще...^400",
                                "Всё,^150 исправил. Теперь можешь загадывать число...",
                            ],
                            typeSpeed: 40,
                            backSpeed: 20,
                            loop: false,
                            fadeOut: true,
                            fadeOutClass: 'typed-fade-out',
                            fadeOutDelay: 50,
                            showCursor: false,
                            onComplete: () => {
                                textField.setAttribute('type', 'number');
                                buttonActive = true;
                            }
                        })
                    } else if (textField.value != '' & checkButton[3] == true & (textField.value >= 1 && textField.value <= 10) & buttonActive == true) {
                        botMemory = textField.value;
                        buttonActive = false;
                        textTen = new Typed('#text-10', {
                            strings: [
                                "Ты уже всё?^150 Окей,^150 дай мне несколько секунд",
                                "Хммм...",
                                "Сейчас-сейчас...^300 Я думаю, что ты загадал число " + botMemory,
                                "Я угадал?",
                            ],
                            typeSpeed: 40,
                            backSpeed: 20,
                            loop: false,
                            fadeOut: true,
                            fadeOutClass: 'typed-fade-out',
                            fadeOutDelay: 50,
                            showCursor: false,
                            onComplete: () => {

                            }
                        })
                    }
                });
            }, 50);
        }
    })
}