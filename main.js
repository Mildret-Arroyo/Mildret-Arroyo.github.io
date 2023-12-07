let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color:#222831;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#222831;">Soy Tecnolochica, me encanta el mundo de la tecnología y programación web!.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
