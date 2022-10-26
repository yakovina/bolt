import {QuestionList} from '../../types';
import Img from '../../img/scenes/page_02.jpg'

export const Day3: QuestionList = [{
    id: 101,
    img: Img,
    question: `<p>Ви отримали замовлення в центрі міста й прибули на точку посадки. Пасажирка ще не вийшла, тож ви чекаєте.</p>
<p>Зателефонувати їй?</p>`,
    answers: [
        {
            id: 1,
            text: 'Так',
            next: 102,
        },
        {
            id: 2,
            text: 'Ні',
            next: 201,
        },
    ],
},
    {
        id: 102,
        question: `<p>Щойно пасажирка взяла слухавку, почала дорікати, що чекає понад 5 хвилин. У застосунку написано, що ви прибули, але вас немає!</p>
<p>Ви уточнюєте адресу й розумієте, що точку було вказано невірно, а жінка чекає з іншого боку кварталу. Проте через односторонній рух, вам потрібно об'їхати — тож зможете опинитися поряд із пасажиркою не менше, ніж за 7 хвилин.</p>
<p>Що робитимете?</p>`,
        answers: [
            {
                id: 1,
                text: 'Пояснюю все і вирушаю',
                next: 103,
            },
            {
                id: 2,
                text: 'Прошу пасажирку підійти до мене, а я зачекаю',
                next: 202,
            },
        ],
    },
    {
        id: 201,
        question: `<p>За хвилину пасажирка телефонує вам сама і дорікає, що вона чекає понад 5 хвилин. У застосунку написано, що ви прибули, але вас немає!</p>
<p>Ви уточнюєте адресу й розумієте, що точку було вказано невірно, а жінка чекає з іншого боку кварталу. Проте через односторонній рух, вам потрібно об'їхати – тож зможете опинитись поряд із пасажиркою не менше, ніж за 7 хвилин.</p>
<p>Що робитимете?</p>`,
        answers: [
            {
                id: 1,
                text: 'Пояснюю все і вирушаю',
                next: 103,
            },
            {
                id: 2,
                text: 'Прошу пасажирку підійти до мене, а я зачекаю',
                next: 202,
            },
        ],
    },
    {
        id: 202,
        rate: -1,
        question: `Жінка відмовилась і скасувала замовлення.`,
        answers: [
            {
                id: 1,
                text: 'Працюю далі',
                next: 0,
            },
        ],
    },
    {
        id: 103,
        question: `Пасажирка навіть не думає перепрошувати за помилку й кидає слухавку.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 104,
            },
        ],
    },
    {
        id: 104,
        question: `Та чекати довелося довше, ніж ви зазначили через великий затор дорогою — це ж самісінький центр міста! Розлючена пасажирка телефонувала вже тричі. Що робитимете?`,
        answers: [
            {
                id: 1,
                text: 'Скасую замовлення',
                next: 203,
            },
            {
                id: 2,
                text: 'Все одно їду',
                next: 105,
            },
        ],
    },
    {
        id: 203,
        rate: -1,
        question: `Ваша Uklon Karma трохи просідає, такий ваш вибір.`,
        answers: [
            {
                id: 1,
                text: 'Працюю далі',
                next: 0,
            },
        ],
    },
    {
        id: 105,
        question: `Ви прибуваєте на точку, де чекає невдоволена жінка. Вона витратила купу часу й додаткових грошей через власну помилку, але чомусь звинувачує у цьому вас.`,
        answers: [
            {
                id: 1,
                text: 'Зачекати, доки вона сяде в салон і їхати мовчки, аби скоріше це скінчилось',
                next: 204,
            },
            {
                id: 2,
                text: 'Віджартуватись й спробувати розрадити жінку',
                next: 106,
            },
        ],
    },
    {
        id: 204,
        question: `Ви доїхали в напруженному мовчанні до пункту призначення й розійшлися не попрощавшись. Такого ви давно не бачили, тож поставили пасажирці 2 зірки написавши гнівний відгук.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 205,
            },
        ],
    },
    {
        id: 205,
        question: `Пасажирка поставила вам 3 зірки. `,
        rate: 3,
        answers: [
            {
                id: 1,
                text: 'Працюю далі',
                next: 0,
            },
        ],
    },
    {
        id: 106,
        question: `<p>Серце жінки трохи розтануло. Сівши в авто, вона почала жалітися на складний день. В результаті пасажирка не зрозуміла, куди варто поставити точку в додатку. </p>
<p>У жінки складна вдача і складний день. Вам навіть її шкода. Пожаліти її?</p>`,
        answers: [
            {
                id: 1,
                text: 'Так, я їй поспівчуваю',
                next: 107,
            },
            {
                id: 1,
                text: 'Ні, скажу, аби вона була уважнішою',
                next: 206,
            },
        ],
    },
    {
        id: 107,
        question: `Ви доїхали швидко й розійшлися майже кращими друзями. Отримуєте від пасажирки 5 зірок, 20 грн чайових і схвальний відгук як про найкращого співрозмовника.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Працюю далі',
                next: 0,
            },
        ],
    },
    {
        id: 206,
        question: `Ви доїхали швидко й мирно розійшлися. Ви отримали 4 зірки від пасажирки.`,
        rate: 4,
        answers: [
            {
                id: 1,
                text: 'Працюю далі',
                next: 0,
            },
        ],
    },

];
