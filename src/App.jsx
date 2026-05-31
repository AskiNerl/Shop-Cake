import { useMemo, useState } from 'react'
import './App.css'

const categories = ['Усе', 'Святкові', 'Дитячі', 'Десерти', 'Розрізи']
const brandName = 'Солодка естетика вашого свята'
const priceNote = 'від 1000 грн/кг'
const minimumOrder = 'мінімальне замовлення від 2 кг'

const telegramUsername = 'Natalka_zt' 


const customTelegramLink = `https://t.me/${telegramUsername}`


function telegramHref(message) {
  return `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`
}

const products = [
  {
    id: 'strawberry-cream',
    title: 'Полуничний кремовий торт',
    categories: ['Святкові'], 
    image: 'cakes/cheesecake-pear.jpg',
    alt: 'Світлий торт з полуницею, мʼятою та золотим топером',
    price: priceNote,
    weight: 'від 2 кг',
    description:
      'Легкий бісквіт, ніжний крем і свіжа полуниця. Добре тримає форму, виглядає святково без зайвого декору.',
    tags: ['полуниця', 'крем-чіз', 'день народження'],
  },
  {
    id: 'kids-cat',
    title: 'Дитячий торт з декором',
    categories: ['Дитячі','Розрізи'], 
    image: 'cakes/kids-cat-cake.jpg',
    alt: 'Рожевий дитячий торт з котиком, метеликами та кульками',
    price: priceNote,
    weight: 'від 2 кг',
    description:
      'Іменний торт з фігурками, свічками та топерами. Колір і тему можна адаптувати під дитину.',
    tags: ['дитяче свято', 'фігурки', 'індивідуально'],
  },
  {
    id: 'rose-lace',
    title: 'Ніжний торт з трояндами',
    categories: ['Святкові'], 
    image: 'cakes/rose-lace-cake.jpg',
    alt: 'Білий торт з рожевим мереживом, трояндами та топером',
    price: priceNote,
    weight: 'від 2 кг',
    description:
      'Для мами, подруги, річниці або камерного свята. Декор з живими квітами узгоджується окремо.',
    tags: ['квіти', 'мереживо', 'річниця'],
  },
  {
    id: 'money-theme',
    title: 'Тематичний торт',
    categories: ['Святкові'], 
    image: 'cakes/money-theme-cake.jpg',
    alt: 'Торт з декором у стилі доларів, бантом і персональним топером',
    price: priceNote,
    weight: 'від 2 кг',
    description:
      'Коли хочеться жарту, персонажа або конкретної ідеї. Підбираємо стиль, напис і їстівний друк.',
    tags: ['персоналізація', 'друк', 'вау-ідея'],
  },
  {
    id: 'tiramisu',
    title: 'Тірамісу у боксі',
    categories: ['Десерти', 'Розрізи'], 
    image: 'cakes/social-theme-cake.jpg',
    alt: 'Порційні бокси тірамісу з какао та кавовими зернами',
    price: priceNote,
    weight: 'від 2 кг',
    description:
      'Зручний формат для подарунка, офісу або маленького солодкого столу. Можна замовляти наборами.',
    tags: ['кава', 'порційно', 'набір'],
  },
  {
    id: 'cheesecake',
    title: 'Чізкейк з грушею та фісташками',
    categories: ['Десерти', 'Розрізи'], 
    image: 'cakes/pineapple-cake-slice.jpg',
    alt: 'Шматок чізкейку з грушею, фісташками та золотим декором',
    price: priceNote,
    weight: 'від 2 кг',
    description:
      'Печена основа, кремова сирна текстура і карамелізована груша. Гарний варіант без мастики',
    tags: ['чізкейк', 'груша', 'фісташка'],
  },
]

const gallery = [
  {
    src: 'cakes/certificate-biscuit-cakes.jpg',
    label: 'Лавандовий торт',
    type: 'Святкові',
  },
  {
    src: 'cakes/women-birthday-cake.jpg',
    label: 'Білий торт зі стрічками',
    type: 'Святкові',
  },
  {
    src: 'cakes/kids-cat-slice.jpg', 
    label: 'Олигарх',
    type: 'Святкові',
  },
  {
    src: 'cakes/blue-bear-cake.jpg',
    label: 'Торт з ведмедиком',
    type: 'Дитячі',
  },
  {
    src: 'cakes/heart-corset-cake.jpg',
    label: 'Полуничний десерт',
    type: 'Десерти',
  },
  {
    src: 'cakes/photo_8_2026-05-29_17-28-27.jpg',
    label: 'Мусовий торт',
    type: 'Десерти',
  },
  {
    src: 'cakes/blue-bear-cake.jpg',
    label: 'Торт з написами',
    type: 'Святкові',
  },
  {
    src: 'cakes/photo_7_2026-05-29_17-28-27.jpg',
    label: 'Деталізований торт ',
    type: 'Святкові',
  },
]

const galleryProducts = gallery.map((item, index) => ({
  id: `gallery-${index}`,
  title: item.label,
  categories: [item.type],
  image: item.src,
  alt: item.label,
  price: priceNote,
  weight: 'від 2 кг',
  description: 'Торт з галереї наших робіт. Деталі декору та написи узгоджуються індивідуально.',
  tags: ['галерея'],
}))


const allProducts = [...products, ...galleryProducts]

const fillings = [
  'Банан-полуниця',
  'Фісташка-малина',
  'Ваніль-груша',
  'Полуниця-мʼята',
  'Тірамісу',
  'Чізкейк з грушею',
  'Порадьте мені',
]

const occasions = [
  'День народження',
  'Дитяче свято',
  'Річниця',
  'Подарунок',
  'Солодкий стіл',
  'Інша подія',
]

const defaultOrder = {
  productId: 'strawberry-cream',
  occasion: 'День народження',
  filling: 'Порадьте мені',
  weight: '2 кг',
  date: '',
  name: '',
  note: '',
}

function getProduct(id) {

  return allProducts.find((product) => product.id === id) ?? allProducts[0]
}



function productMessage(product) {
  return [
    `Вітаю! Хочу замовити у "${brandName}": ${product.title}.`,
    `Орієнтир: ${product.price}. ${minimumOrder}.`,
    'Підкажіть, будь ласка, доступну дату, начинку та фінальну вартість.',
  ].join('\n')
}

function orderMessage(order) {
  const product = getProduct(order.productId)
  const lines = [
    `Вітаю! Хочу оформити замовлення у "${brandName}".`,
    `Виріб: ${product.title}`,
    `Подія: ${order.occasion}`,
    `Начинка: ${order.filling}`,
    `Орієнтовна вага: ${order.weight || 'порадьте оптимальну'}`,
    `Дата: ${order.date || 'ще уточню'}`,
    `Ціна: ${priceNote}`,
    `Умова: ${minimumOrder}`,
  ]

  if (order.name.trim()) {
    lines.push(`Імʼя: ${order.name.trim()}`)
  }

  if (order.note.trim()) {
    lines.push(`Побажання: ${order.note.trim()}`)
  }

  lines.push('Підкажіть, будь ласка, ціну та найближчі вільні дати.')

  return lines.join('\n')
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Усе')
  const [order, setOrder] = useState(defaultOrder)

  const selectedProduct = getProduct(order.productId)
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Усе') {
      return products
    }

   
    return products.filter((product) => product.categories.includes(activeCategory))
  }, [activeCategory])
  const customTelegramLink = telegramHref(orderMessage(order))

  const updateOrder = (field, value) => {
    setOrder((current) => ({ ...current, [field]: value }))
  }

  const chooseProduct = (productId) => {
    setOrder((current) => ({ ...current, productId }))
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="На головну">
          <span className="brand-mark">С</span>
          <span>
            <strong>Солодка естетика</strong>
            <small>вашого свята</small>
          </span>
        </a>

        <nav className="nav" aria-label="Головна навігація">
          <a href="#catalog">Каталог</a>
          <a href="#fillings">Начинки</a>
          <a href="#process">Як замовити</a>
          <a href="#contacts">Контакти</a>
        </nav>

        <a className="topbar-cta" href="#order">
          Замовити
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label={brandName}>
          <div className="hero-copy">
            <span className="eyebrow">Торти під замовлення</span>
            <h1>
              <span>Солодка естетика</span>
              <span>вашого свята</span>
            </h1>
            <p>
              <span>Авторські торти з індивідуальним декором.</span>
              <span>Продумані начинки.</span>
              <span>Швидке замовлення одразу в Telegram.</span>
              <span>Від 1000 грн/кг, мінімальне замовлення від 2 кг.</span>
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#catalog">
                Обрати торт
              </a>
              <a
                className="secondary-link"
                href={telegramHref(
                  `Вітаю! Хочу замовити торт у "${brandName}" і підібрати дизайн під мою подію. Ціна від 1000 грн/кг, мінімальне замовлення від 2 кг.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Написати в Telegram
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Переваги">
            <div>
              <strong>від 1000</strong>
              <span>грн за кг</span>
            </div>
            <div>
              <strong>від 2 кг</strong>
              <span>мінімальне замовлення</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>ручна робота</span>
            </div>
          </div>
        </section>

        <section className="section intro-grid" aria-label="Ключові послуги">
          <article>
            <span>01</span>
            <h2>Торт під подію</h2>
            <p>
              День народження, річниця, дитяче свято або подарунок без приводу.
              Дизайн підбирається під людину, а не з випадкової картинки.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Ціна без плутанини</h2>
            <p>
              У картках вказано базу: торти від 1000 грн за кг, мінімальне
              замовлення від 2 кг. Деталі декору уточнюються в Telegram.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Акуратна подача</h2>
            <p>
              Сайт показує фото робіт, розрізи, сертифікати та правила
              замовлення, щоб новий бізнес одразу виглядав упевнено.
            </p>
          </article>
        </section>

        <section className="section catalog-section" id="catalog">
          <div className="section-heading">
            <span className="eyebrow">Каталог</span>
            <h2>Готові напрямки для швидкого вибору</h2>
            <p>
              Кожну позицію можна замовити як є або взяти за основу для
              власного дизайну. Базова ціна - від 1000 грн/кг, мінімальне
              замовлення - від 2 кг.
            </p>
          </div>

          <div className="tabs" role="tablist" aria-label="Категорії десертів">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'active' : ''}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
               <img src={product.image} alt={product.alt} loading="lazy" />
              <span>{product.categories.join(' / ')}</span>
              </div>
                <div className="product-body">
                  <div className="product-title-row">
                    <h3>{product.title}</h3>
                    <strong>{product.price}</strong>
                  </div>
                  <p>{product.description}</p>
                  <div className="product-meta">
                    <span>{product.weight}</span>
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="product-actions">
                    <a
                      className="primary-link"
                      href={telegramHref(productMessage(product))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Замовити
                    </a>
                    <button type="button" onClick={() => chooseProduct(product.id)}>
                      Додати деталі
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" aria-label="Галерея робіт">
          <div className="section-heading compact">
            <span className="eyebrow">Галерея</span>
            <h2>Фото реальних робіт</h2>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <figcaption>
                  <span>{item.label}</span>
                  <small>{item.type}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section fillings-section" id="fillings">
          <div className="section-heading">
            <span className="eyebrow">Начинки</span>
            <h2>Смаки, які можна пояснити однією фразою</h2>
            <p>
              Блок зроблений так, щоб клієнт швидко зрозумів різницю між
              варіантами і не губився перед замовленням.
            </p>
          </div>

          <div className="filling-layout">
            <div className="filling-photo">
              <img
                src="cakes/green-berry-slice.jpg"
                alt="Розріз торта з ягідним шаром та кремом"
                loading="lazy"
              />
            </div>
            <div className="filling-list">
              <article>
                <h3>Банан-полуниця</h3>
                <p>Ніжний бісквіт, вершковий крем, ягідний акцент і мʼякий банан.</p>
              </article>
              <article>
                <h3>Фісташка-малина</h3>
                <p>Більш виразний смак з горіховою нотою і кисло-солодкою ягодою.</p>
              </article>
              <article>
                <h3>Ваніль-груша</h3>
                <p>Світла класика з соковитою грушею, добре підходить для дітей.</p>
              </article>
              <article>
                <h3>Кава та тірамісу</h3>
                <p>Для дорослого свята, офісу або невеликого солодкого столу.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section order-section" id="order">
          <div className="order-copy">
            <span className="eyebrow">Швидке замовлення</span>
            <h2>Зберіть бриф, а сайт сам підставить текст для Telegram</h2>
            <p>
              Клієнт не пише все з нуля: обирає торт, подію, начинку, вагу,
              дату та побажання. Після натискання відкривається Telegram з
              готовим повідомленням, ціною від 1000 грн/кг і мінімальним
              замовленням від 2 кг.
            </p>
            <div className="selected-preview">
              <img src={selectedProduct.image} alt={selectedProduct.alt} loading="lazy" />
              <div>
                <span>Обрано</span>
                <strong>{selectedProduct.title}</strong>
                <small>{selectedProduct.price}</small>
              </div>
            </div>
          </div>

          <form className="order-form">
            <label>
              Торт або десерт
              <select
                value={order.productId}
                onChange={(event) => updateOrder('productId', event.target.value)}
              >
                <optgroup label="Готові напрямки">
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="З галереї робіт">
                  {galleryProducts.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>

            <div className="field-row">
              <label>
                Вага
                <input
                  value={order.weight}
                  onChange={(event) => updateOrder('weight', event.target.value)}
                  placeholder="Наприклад, 2 кг"
                />
              </label>
              <label>
                Дата
                <input
                  type="date"
                  value={order.date}
                  onChange={(event) => updateOrder('date', event.target.value)}
                />
              </label>
            </div>

            <fieldset>
              <legend>Подія</legend>
              <div className="choice-grid">
                {occasions.map((occasion) => (
                  <button
                    className={order.occasion === occasion ? 'active' : ''}
                    key={occasion}
                    type="button"
                    onClick={() => updateOrder('occasion', occasion)}
                  >
                    {occasion}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Начинка</legend>
              <div className="choice-grid fillings-choice">
                {fillings.map((filling) => (
                  <button
                    className={order.filling === filling ? 'active' : ''}
                    key={filling}
                    type="button"
                    onClick={() => updateOrder('filling', filling)}
                  >
                    {filling}
                  </button>
                ))}
              </div>
            </fieldset>

            <label>
              Ваше імʼя
              <input
                value={order.name}
                onChange={(event) => updateOrder('name', event.target.value)}
                placeholder="Як до вас звертатися"
              />
            </label>

            <label>
              Побажання
              <textarea
                value={order.note}
                onChange={(event) => updateOrder('note', event.target.value)}
                placeholder="Напис, кольори, алергії, референс, кількість гостей"
                rows="4"
              />
            </label>

            <a
              className="submit-order"
              href={customTelegramLink}
              target="_blank"
              rel="noreferrer"
            >
              Надіслати в Telegram
            </a>
          </form>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading compact">
            <span className="eyebrow">Як це працює</span>
            <h2>Замовлення без зайвих кроків</h2>
          </div>

          <div className="process-grid">
            <article>
              <span>1</span>
              <h3>Обираєте ідею</h3>
              <p>Каталог, галерея або власний референс з Pinterest чи Instagram.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Пишете в Telegram</h3>
              <p>Сайт автоматично додає назву торта, вагу, дату, начинку і подію.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Узгоджуємо деталі</h3>
              <p>Підтверджуємо декор, склад, термін, пакування і фінальну ціну.</p>
            </article>
            <article>
              <span>4</span>
              <h3>Готуємо свіже</h3>
              <p>Торт збирається під конкретну дату, щоб крем і бісквіт були в балансі.</p>
            </article>
          </div>
        </section>

        <section className="section trust-section">
          <div className="trust-copy">
            <span className="eyebrow">Довіра</span>
            <h2>Сертифікати, інформація та відкриті розрізи</h2>
            <p>
              Для нового бізнесу важливо одразу показати не тільки красу, а й
              рівень підготовки. Тому на сайті є навчання, реальні фото начинок
              і зрозумілі умови замовлення.
            </p>
            <ul>
              <li>Сертифікати з бісквітних тортів і смаку банан-полуниця.</li>
              <li>Фото розрізів, щоб клієнт бачив шари, крем і ягоди.</li>
              <li>Окремий блок для алергій, написів і персонального декору.</li>
              <li> Дизайн тортів, який не вимагає пояснень і виглядає святково без зайвого декору.</li>
              <li>Чіткі умови замовлення з базовою ціною від 1000 грн/кг і мінімальним замовленням від 2 кг.</li>
              <li>Готові шаблони повідомлень для Telegram, які клієнт може використовувати для швидкого замовлення.</li>
            </ul>
          </div>

          <div className="trust-media">
            <img
              src="cakes/lavender-birthday.jpg"
              alt="Сертифікат курсу бісквітні торти"
              loading="lazy"
            />
            <img
              src="cakes/photo_2_2026-05-29_17-28-27.jpg"
              alt="Сертифікат курсу банан-полуниця"
              loading="lazy"
            />
            <img
              src="cakes/photo_1_2026-05-29_17-29-21.jpg"
              alt="Інформаці"
              loading="lazy"
            />
          </div>
        </section>

        <section className="section faq-section">
          <div className="section-heading compact">
            <span className="eyebrow">Питання</span>
            <h2>Коротко перед замовленням</h2>
          </div>

          <div className="faq-grid">
            <details open>
              <summary>За скільки днів краще замовляти?</summary>
              <p>
                Оптимально за 10-12 днів. Для складного декору, фігурок або
                великого свята краще писати раніше.
              </p>
            </details>
            <details>
              <summary>Чи можна повторити торт з фото?</summary>
              <p>
                Так, але фінальний вигляд адаптується під вагу, доступні
                матеріали і безпечний декор.
              </p>
            </details>
            <details>
              <summary>Як формується ціна?</summary>
              <p>
                Базова ціна торта - від 1000 грн за кг. Мінімальне замовлення
                від 2 кг, а фінальна сума залежить від декору, топерів, ягід,
                квітів та їстівного друку.
              </p>
            </details>
            <details>
              <summary>Чи можна замовити без мастики?</summary>
              <p>
                Так, є кремові торти, чізкейки, тірамісу і мусові варіанти без
                важкого декору.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer" id="contacts">
        <div>
          <span className="brand-mark">С</span>
          <div>
            <strong>{brandName}</strong>
            <p>Авторські торти від 1000 грн/кг, мінімальне замовлення від 2 кг.</p>
          </div>
        </div>
        <a
          className="primary-link"
          href={telegramHref(
            `Вітаю! Хочу уточнити деталі замовлення у "${brandName}". Ціна від 1000 грн/кг, мінімальне замовлення від 2 кг.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </footer>

      <div className="mobile-order-bar">
        <a href="#catalog">Каталог</a>
        <a
          href={customTelegramLink}
          target="_blank"
          rel="noreferrer"
        >
          Замовити
        </a>
      </div>
    </div>
  )
}

export default App
