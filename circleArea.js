//konsoldan parametre olarak girilen yarıçapı al ve sayıya çevir
const radius = process.argv.slice(2)[0] * 1;

//alan hesapla pi çarpı yarıçapın karesi
const findAreaOfCircle = (radius) => {
  //Math objesindeki pi ile Math objesindeki üs işlemleri için kullanılan pow methoduyla yarıçapın ikinci kuvvetini çarp
  //toFixed ile virgülden sonrasını kaldır
  let area = (Math.PI * Math.pow(radius, 2)).toFixed(0);
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
};
//alan hesapla fonksiyonunu çalıştır. parametre olarak yukarda argv içersinden çekilen radiusu ver
findAreaOfCircle(radius);

//örnek kullanım
//node circleArea 6
//Yarıçapı 6 olan dairenin alanı: 113
