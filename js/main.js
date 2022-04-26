const app = document.querySelector('#app');

const div1 = document.createElement('div');
const div2 = document.createElement('div');

div1.classList.add('left');
div2.classList.add('right');

div1.innerHTML = `
    <h1>Description</h1>
    <form action="/shop" method="POST">
    <div>
        <label for="bread" style="display: block;">Choose a bread type:</label>
        <select name="bread" id="bread">
            <option value="Yupqa">Yupqa</option>
            <option value="O'rtacha">O'rtacha</option>
            <option value="Qalin">Qalin</option>
        </select>
    </div>
    <div class="radio-toolbar">
        <p>Kattaligi:</p>
            <input type="radio" id="cm25" name="fav_language" value="cm25">
            <label for="cm25">25 cm</label>
            <input type="radio" id="cm30" name="fav_language" value="cm30">
            <label for="cm30">30 cm</label>
            <input type="radio" id="cm35" name="fav_language" value="cm35">
            <label for="cm35">35 cm</label>
    <div>
    </form>
`;
div2.innerHTML = `
    <h1>Summary</h1>
    <p>
    Qalinlig: <span id="bread-type"></span><br>
    </p>
`;

const h1 = document.createElement('h1');
h1.innerHTML = 'Order pizza 🍕';
document
  .getElementsByTagName('body')[0]
  .insertAdjacentElement('afterbegin', h1);
app.insertAdjacentElement('beforeend', div1);
app.insertAdjacentElement('beforeend', div2);

const select = document.getElementsByTagName('select')[0];
const breadType = document.querySelector(`#bread-type`);
breadType.innerHTML = select.value;
select.addEventListener('change', (e) => {
  breadType.innerHTML = select.value;
});
console.log(select.value);
