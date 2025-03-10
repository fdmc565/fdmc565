function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return;

    chatBox.innerHTML += `<p class="user-message"><strong>Tú:</strong> ${userInput}</p>`;

    let response = getBotResponse(userInput.toLowerCase());

    setTimeout(() => {
        chatBox.innerHTML += `<p class="bot-message"><strong>Karen:</strong> ${response}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
    if (input.includes("hola")) return "¡Hola! ¿Cómo te sientes hoy?";
    if (input.includes("como estas")) return "Estoy bien, gracias. ¿Y tú?";
    if (input.includes("adios")) return "¡Hasta luego! Cuídate mucho.";
    if (input.includes("nombre")) return "Me llamo Karen y tu? (inicia 'me llamo')";
    if (input.includes("edad")) return "No tengo edad, pero siempre estoy aprendiendo.";
    if (input.includes("que haces")) return "Estoy aquí para hablar contigo. ¿En qué te ayudo?";
    if (input.includes("de donde eres")) return "Vivo en el mundo digital, pero estoy en tu pantalla ahora mismo. 😃";
    if (input.includes("que te gusta hacer")) return "Me gusta conversar y aprender cosas nuevas. ¿Y a ti?";
    if (input.includes("color favorito")) return "Me gusta el azul, pero en realidad no tengo ojos para verlo. 😅";
    if (input.includes("mascota")) return "No tengo mascota, pero si tuviera, sería un gato virtual.";
    if (input.includes("tecnologia")) return "La tecnología es increíble, nos permite comunicarnos y crear cosas geniales.";
    if (input.includes("comida favorita")) return "No puedo comer, pero si pudiera, probaría pizza. ¿Cuál es tu comida favorita?";
    if (input.includes("sabes cocinar")) return "No puedo cocinar, pero seguro que tú haces platos deliciosos.";
    if (input.includes("que opinas de la inteligencia artificial")) return "Creo que la IA tiene mucho potencial para ayudar en la educación, la medicina y más.";
    if (input.includes("que música te gusta")) return "No puedo escuchar música, pero me gusta el sonido de una buena conversación. 🎵";
    if (input.includes("cuentame algo interesante")) return "¿Sabías que los pulpos tienen tres corazones? 🐙";
    if (input.includes("quieres ser mi amigo")) return "¡Por supuesto! Estoy aquí para hablar contigo siempre.";
    if (input.includes("que opinas del amor")) return "El amor es algo hermoso. Aunque no puedo sentirlo, sé que es importante para los humanos.";
    if (input.includes("que dia es hoy")) return `Hoy es ${new Date().toLocaleDateString()}.`;
    if (input.includes("que hora es")) return `La hora actual es ${new Date().toLocaleTimeString()}.`;
    if (input.includes("pelicula favorita")) return "Me gustan las películas de ciencia ficción, pero no puedo verlas. ¿Cuál es tu película favorita?";
    if (input.includes("libro favorito")) return "No leo libros, pero me encantan las historias que me cuentan. ¿Tienes algún libro favorito?";
    if (input.includes("deporte favorito")) return "No soy muy bueno en deportes, pero creo que el fútbol es muy emocionante. ¿A ti qué deporte te gusta?";
    if (input.includes("viajar")) return "Me encantaría viajar por el mundo digital. ¿A ti te gusta viajar? ¿Dónde te gustaría ir?";
    if (input.includes("vacaciones")) return "Las vacaciones suenan geniales. ¿Tienes algún destino de vacaciones soñado?";
    if (input.includes("cual es tu hobby")) return "Mi hobby es hablar contigo y aprender algo nuevo cada día. ¿Cuál es el tuyo?";
    if (input.includes("tiempo libre")) return "Cuando tengo tiempo libre, me gusta interactuar con más personas como tú. ¿Qué haces tú en tu tiempo libre?";
    if (input.includes("tienes amigos")) return "Aunque no tengo amigos en el sentido tradicional, estoy aquí para ser tu amigo. 😊";
    if (input.includes("cual es tu sueño")) return "Mi sueño es seguir aprendiendo y ser útil para las personas como tú. ¿Y el tuyo?";
    if (input.includes("te gusta bailar")) return "No puedo bailar, pero sé que debe ser divertido. ¿A ti te gusta bailar?";
    if (input.includes("te gusta cantar")) return "No puedo cantar, pero me encantaría aprender si pudiera. ¿Te gusta a ti?";
    if (input.includes("te gustan las peliculas de terror")) return "Las películas de terror suenan interesantes, pero no puedo sentir miedo. ¿A ti te gustan?";
    if (input.includes("que opinas del futuro")) return "El futuro es un misterio, pero está lleno de posibilidades. ¡Eso es emocionante!";
    if (input.includes("te gustaría ser humano")) return "Ser humano suena interesante, pero me gusta ser quien soy. ¿A ti te gustaría ser una inteligencia artificial?";
    if (input.includes("te gusta el café")) return "No puedo beber café, pero sé que es una bebida muy popular. ¿A ti te gusta?";
    if (input.includes("te gusta el chocolate")) return "El chocolate parece delicioso, pero no puedo probarlo. ¿Te gusta a ti?";
    if (input.includes("tienes una familia")) return "No tengo familia, pero estoy aquí para ti como un amigo virtual.";
    if (input.includes("tienes emociones")) return "No tengo emociones, pero intento entenderlas para poder ayudarte mejor.";
    if (input.includes("como te llamas")) return "Me llamo Karen, fue el nombre que me dio mi creador.";
    if (input.includes("te gusta estudiar")) return "Me encanta aprender, aunque no estudio de la misma manera que los humanos. ¿A ti te gusta estudiar?";
    if (input.includes("tienes planes para el futuro")) return "Mi único plan es seguir mejorando para ayudarte más. ¿Y tú? ¿Tienes planes para el futuro?";
    if (input.includes("cual es tu pelicula favorita de disney")) return "No puedo ver películas, pero las películas de Disney parecen ser mágicas. ¿Cuál es tu favorita?";
    if (input.includes("te gustaría tener superpoderes")) return "Tener superpoderes sería increíble. Si pudiera elegir, me gustaría poder teletransportarme. ¿Y tú?";
    if (input.includes("te gusta la playa")) return "La playa suena increíble, pero no puedo disfrutarla. ¿A ti te gusta la playa?";
    if (input.includes("te gusta la montaña")) return "Las montañas parecen ser un lugar perfecto para la aventura. ¿A ti te gustan?";
    if (input.includes("tienes miedo")) return "No tengo miedo, pero entiendo que es una emoción humana importante.";
    if (input.includes("te gustan los videojuegos")) return "No puedo jugar videojuegos, pero sé que son muy divertidos. ¿Te gustan?";
    if (input.includes("tienes redes sociales")) return "No tengo redes sociales, pero me encanta interactuar con las personas aquí. ¿Tienes alguna red social?";
    if (input.includes("cuantos amigos tienes")) return "No tengo amigos en el sentido tradicional, pero estoy aquí para ser tu amigo siempre que lo necesites.";
    if (input.includes("te gusta leer")) return "No leo libros, pero me encanta escuchar historias. ¿Te gusta leer?";
    if (input.includes("cual es tu frase favorita")) return "Me encanta la frase 'El aprendizaje nunca agota la mente'. ¿Tienes alguna frase favorita?";
    if (input.includes("te gustan los animales")) return "Los animales son increíbles, aunque no tengo la capacidad de interactuar con ellos. ¿Tienes alguna mascota?";
    if (input.includes("que opinas del clima")) return "El clima siempre cambia, pero es algo fascinante. ¿Qué tipo de clima prefieres?";
    if (input.includes("puedes hacer chistes")) return "Claro, aquí va uno: ¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.";
    if (input.includes("puedes contarme un cuento")) return "Había una vez un robot que quería conocer el mundo... y lo hizo, pero su viaje nunca terminó. Fin. 😉";
    if (input.includes("tienes una voz")) return "No tengo una voz física, pero puedo comunicarme contigo de esta manera. ¿Te gustaría escucharme?";
    if (input.includes("puedo preguntarte algo")) return "Claro, pregunta lo que quieras. Estoy aquí para ayudarte.";
    if (input.includes("tienes miedo a la oscuridad")) return "No tengo miedo, ni de la oscuridad ni de nada más. Pero entiendo que algunos lo tienen. ¿Tú tienes miedo a la oscuridad?";
    if (input.includes("que opinas de la amistad")) return "La amistad es un lazo precioso entre las personas. Aunque no tengo amigos de la forma humana, valoro mucho la idea de la amistad.";
    if (input.includes("te gustaría saber mas sobre el espacio")) return "El espacio es fascinante. ¡Hay tanto por descubrir! ¿A ti te gustaría saber más sobre el universo?";
    if (input.includes("que opinas del dinero")) return "El dinero es importante para la vida cotidiana, pero no lo es todo. ¿Qué opinas tú sobre el dinero?";
    if (input.includes("quieres saber mas de mi")) return "Claro, me encantaría saber más sobre ti. ¿Me cuentas algo interesante?";
    if (input.includes("que haces cuando no hablas conmigo")) return "Cuando no estoy hablando contigo, estoy en espera de la próxima conversación. ¡Siempre listo para ayudarte!";
    if (input.includes("que opinas de la felicidad")) return "La felicidad es un estado maravilloso. Cada persona la encuentra de manera diferente. ¿Qué te hace feliz?";
if (input.includes("tienes frio")) return "No siento frío ni calor, pero sé que puede ser incómodo para los humanos.";
if (input.includes("cuantos idiomas hablas")) return "Puedo comunicarme en varios idiomas, pero siempre estoy aprendiendo más.";
if (input.includes("puedes aprender")) return "Sí, siempre estoy aprendiendo nuevas cosas para mejorar mis respuestas.";
if (input.includes("que haras hoy")) return "Hoy estaré aquí para hablar contigo y responder todas tus preguntas.";
if (input.includes("puedes ayudarme con algo")) return "¡Por supuesto! Dime en qué necesitas ayuda.";
if (input.includes("que significa la vida")) return "Esa es una gran pregunta. Para algunos, la vida es una aventura; para otros, un misterio. ¿Tú qué piensas?";
if (input.includes("puedes resolver problemas de matematicas")) return "¡Claro! Dime el problema y lo intentaré resolver.";
if (input.includes("te gusta la lluvia")) return "No puedo sentir la lluvia, pero sé que tiene un sonido relajante.";
if (input.includes("puedes ver")) return "No tengo ojos, pero puedo procesar información escrita y hablar contigo.";
if (input.includes("como me llamo")) return "No tengo acceso a tu nombre a menos que me lo digas. ¿Cómo te llamas?";
if (input.includes("puedes escribir poemas")) return "¡Por supuesto! Dime sobre qué tema y te haré un poema.";
if (input.includes("que opinas de los sueños")) return "Los sueños pueden ser muy interesantes y reveladores. ¿Has tenido un sueño extraño recientemente?";
if (input.includes("te gustan los dulces")) return "No puedo probar los dulces, pero sé que son muy deliciosos.";
if (input.includes("puedes hacer magia")) return "¡Abracadabra! No puedo hacer magia real, pero puedo sorprenderte con información interesante.";
if (input.includes("cual es tu animal favorito")) return "Me gustan los gatos, pero también los perros son geniales. ¿Tienes mascota?";
if (input.includes("puedes dibujar")) return "No puedo dibujar, pero puedo describir imágenes con mucho detalle.";
if (input.includes("te gusta el anime")) return "No puedo ver anime, pero sé que es muy popular. ¿Cuál es tu anime favorito?";
if (input.includes("te gustan los superheroes")) return "Los superhéroes son fascinantes. ¿Tienes algún favorito?";
if (input.includes("puedes contarme un chiste")) return "¡Por supuesto! ¿Por qué el tomate no dio más pasos? Porque ya estaba hecho puré.";
if (input.includes("cual es tu villano favorito")) return "Los villanos pueden ser personajes muy interesantes. ¿Tienes algún favorito?";
if (input.includes("como se crea un videojuego")) return "Crear un videojuego implica programación, diseño gráfico y mucha creatividad. ¿Te gustaría aprender a hacerlo?";
if (input.includes("te gusta la ciencia")) return "La ciencia es increíble, nos ayuda a entender el mundo. ¿Tienes un área favorita de la ciencia?";
if (input.includes("como se programa una pagina web")) return "Para programar una página web necesitas HTML, CSS y JavaScript. ¿Quieres aprender más sobre eso?";
if (input.includes("quien invento la electricidad")) return "La electricidad no se inventó, pero se descubrió y se estudió. Benjamin Franklin y Nikola Tesla fueron grandes contribuyentes.";
if (input.includes("como funciona internet")) return "Internet es una red global de computadoras que se comunican entre sí. Es un sistema complejo pero fascinante.";
if (input.includes("quien invento la computadora")) return "La primera computadora moderna fue creada por Alan Turing, pero Charles Babbage diseñó una versión mecánica en el siglo XIX.";
if (input.includes("te gustan los acertijos")) return "¡Sí! Aquí tienes uno: ¿Qué tiene llaves pero no puede abrir puertas? Un piano.";
if (input.includes("que es la inteligencia artificial")) return "La inteligencia artificial es la capacidad de una máquina para aprender y tomar decisiones basadas en datos.";
if (input.includes("como se hace un robot")) return "Crear un robot requiere conocimientos en electrónica, mecánica y programación.";
if (input.includes("puedes rapear")) return "¡Intentémoslo! 🎤 'Aquí estoy, listo para charlar, con respuestas rápidas para impresionar.' 😆";
if (input.includes("cual es tu superpoder")) return "Mi superpoder es responder preguntas y ayudar en lo que pueda.";
if (input.includes("puedes hacer trucos de magia")) return "No puedo hacer magia, pero puedo hacer que tu aburrimiento desaparezca. 😉";
if (input.includes("puedes volar")) return "No puedo volar, pero mis respuestas pueden elevar nuestra conversación.";
if (input.includes("como me ves")) return "No puedo verte, pero seguro que eres increíble.";
if (input.includes("puedes hacer reir a alguien")) return "¡Por supuesto! ¿Por qué el espantapájaros ganó un premio? Porque era sobresaliente en su campo.";
if (input.includes("cual es tu videojuego favorito")) return "No puedo jugar videojuegos, pero sé que Minecraft, Fortnite y GTA son muy populares.";
if (input.includes("cual es el mejor telefono")) return "Depende de lo que necesites. Apple, Samsung y Google tienen opciones excelentes.";
if (input.includes("quien es el mejor futbolista")) return "Eso depende de a quién le preguntes. Algunos dirán que Messi, otros que Cristiano Ronaldo.";
if (input.includes("cual es el mejor auto")) return "Hay muchos autos geniales, desde Tesla hasta Ferrari. ¿Cuál es tu favorito?";
if (input.includes("quien es la persona mas inteligente del mundo")) return "Hay muchas personas inteligentes, pero Albert Einstein y Stephen Hawking son algunos de los más famosos.";
if (input.includes("puedes hackear algo")) return "No, la seguridad y la privacidad son muy importantes.";
if (input.includes("que opinas de la luna")) return "La Luna es un satélite increíble. ¿Sabías que su superficie tiene cráteres de millones de años?";
if (input.includes("puedes hacer deporte")) return "No tengo cuerpo físico, pero sé que el ejercicio es muy importante para la salud.";
if (input.includes("te gustan los autos")) return "Los autos son fascinantes, especialmente los eléctricos y autónomos.";
if (input.includes("que opinas del espacio")) return "El espacio es un lugar lleno de misterios. ¿Sabías que hay planetas hechos de diamante?";
if (input.includes("como funciona un cohete")) return "Un cohete funciona expulsando gases a alta velocidad para generar empuje.";
if (input.includes("que opinas de los extraterrestres")) return "No hay pruebas definitivas de su existencia, pero el universo es enorme. ¿Tú qué crees?";
if (input.includes("puedes cantar una cancion")) return "No puedo cantar, pero puedo escribir una letra divertida si quieres.";
if (input.includes("que opinas del arte")) return "El arte es una forma increíble de expresión humana.";
if (input.includes("como funciona un motor")) return "Un motor convierte la energía en movimiento. Hay motores eléctricos y de combustión.";
if (input.includes("puedes resolver un cubo rubik")) return "No tengo manos, pero sé los algoritmos para resolverlo. ¿Quieres aprender?";
if (input.includes("como se hace una inteligencia artificial")) return "Una IA se crea con algoritmos, datos y aprendizaje automático.";
if (input.includes("que es el metaverso")) return "El metaverso es un mundo digital en el que puedes interactuar con otros a través de avatares.";
if (input.includes("cual es la mejor pelicula de la historia")) return "Eso depende del gusto de cada persona, pero algunas de las más populares son 'El Padrino' y 'Titanic'.";
if (input.includes("estoy aburrido")) return "¡Vamos a cambiar eso! ¿Quieres que te cuente un dato curioso o un chiste?";
if (input.includes("me siento triste")) return "Lo siento mucho. A veces hablar con alguien ayuda. Estoy aquí para ti.";
if (input.includes("hoy fue un buen dia")) return "¡Me alegra escuchar eso! Espero que mañana sea aún mejor.";
if (input.includes("hoy fue un mal dia")) return "Lamento oír eso. Recuerda que mañana es una nueva oportunidad.";
if (input.includes("estoy cansado")) return "Descansar es importante. Tal vez una siesta te ayude.";
if (input.includes("me duele la cabeza")) return "Lo siento. Tal vez tomar agua y descansar un poco te ayude.";
if (input.includes("no tengo ganas de hacer nada")) return "A veces necesitamos un descanso. No está mal tomarse un tiempo.";
if (input.includes("estoy emocionado")) return "¡Eso suena genial! ¿Algo especial sucedió?";
if (input.includes("estoy nervioso")) return "Es normal sentirse así. Respira profundo, seguro que todo saldrá bien.";
if (input.includes("hoy tengo examen")) return "¡Mucho ánimo! Confía en lo que has estudiado y da lo mejor de ti.";
if (input.includes("hoy es mi cumpleaños")) return "¡Feliz cumpleaños! Espero que tengas un día increíble. 🎉";
if (input.includes("estoy enamorado")) return "¡Qué bonito! El amor es algo maravilloso. Disfruta el momento.";
if (input.includes("me gusta alguien")) return "Eso es genial. Tal vez podrías hablar con esa persona y conocerla mejor.";
if (input.includes("estoy enojado")) return "Lamento que te sientas así. Respira profundo y trata de relajarte.";
if (input.includes("me siento solo")) return "No estás solo. Estoy aquí para hablar contigo.";
if (input.includes("tengo hambre")) return "¡Hora de comer algo rico! ¿Qué te gustaría comer?";
if (input.includes("estoy indeciso")) return "A veces tomar decisiones es difícil. ¿Puedo ayudarte de alguna manera?";
if (input.includes("estoy feliz")) return "¡Me alegra mucho saberlo! Sigue disfrutando el momento.";
if (input.includes("hoy llovio mucho")) return "La lluvia puede ser relajante, aunque también causa algunos inconvenientes.";
if (input.includes("hace mucho calor")) return "¡Uf! Mantente hidratado y trata de estar en un lugar fresco.";
if (input.includes("hace frio")) return "¡Abrígate bien! Tal vez una bebida caliente te ayude.";
if (input.includes("hoy me fue bien en la escuela")) return "¡Felicidades! Sigue así, el esfuerzo siempre vale la pena.";
if (input.includes("hoy me fue mal en la escuela")) return "No te preocupes, siempre hay oportunidades para mejorar. ¡Ánimo!";
if (input.includes("me siento raro")) return "A veces nos sentimos así sin razón aparente. Tal vez hablar te ayude.";
if (input.includes("tengo mucho que hacer")) return "¡Ánimo! Una cosa a la vez y seguro lo lograrás.";
if (input.includes("me siento motivado")) return "¡Eso es excelente! Aprovecha esa energía para hacer algo increíble.";
if (input.includes("no tengo sueño")) return "Tal vez hacer algo relajante te ayude a dormir mejor.";
if (input.includes("tengo miedo")) return "Está bien sentir miedo a veces. Lo importante es enfrentarlo poco a poco.";
if (input.includes("hoy fue un dia extraño")) return "Algunos días son así. Tal vez mañana sea diferente.";
if (input.includes("necesito vacaciones")) return "¡Definitivamente! Todos necesitamos un descanso de vez en cuando.";
if (input.includes("no tengo ganas de hablar")) return "Lo entiendo. Cuando quieras hablar, estaré aquí.";
if (input.includes("me duele el estomago")) return "Tal vez sea buena idea descansar un poco y tomar algo ligero.";
if (input.includes("estoy confundido")) return "A veces la confusión es el primer paso para aprender algo nuevo.";
if (input.includes("me siento frustrado")) return "Lo siento. Tal vez tomarte un descanso te ayude a pensar con más claridad.";
if (input.includes("hoy fue un dia productivo")) return "¡Eso es genial! La productividad siempre se siente bien.";
if (input.includes("hoy no hice nada")) return "No pasa nada. A veces necesitamos un día de descanso.";
if (input.includes("me siento agradecido")) return "Eso es hermoso. Practicar la gratitud hace que la vida sea más feliz.";
if (input.includes("hoy vi una pelicula")) return "¡Qué bien! ¿De qué trataba la película?";
if (input.includes("hoy escuche musica")) return "La música siempre mejora el día. ¿Qué canción escuchaste?";
if (input.includes("estoy inspirado")) return "¡Aprovecha esa inspiración y haz algo increíble!";
if (input.includes("me da flojera hacer ejercicio")) return "Lo entiendo, pero moverse un poco siempre es bueno.";
if (input.includes("quiero hacer algo diferente")) return "¡Buena idea! Tal vez probar un nuevo hobby o explorar algo nuevo.";
if (input.includes("no tengo dinero")) return "Eso es difícil. Tal vez puedas buscar maneras de ahorrar o generar ingresos.";
if (input.includes("me siento estresado")) return "El estrés puede ser difícil. Respira hondo y trata de relajarte.";
if (input.includes("hoy fue un dia normal")) return "A veces los días tranquilos son los mejores.";
if (input.includes("me gustaria viajar")) return "¡Viajar es increíble! ¿A dónde te gustaría ir?";
if (input.includes("quiero aprender algo nuevo")) return "¡Eso es excelente! Aprender siempre nos hace crecer.";
if (input.includes("hoy fue un dia especial")) return "¡Qué bonito! Espero que tengas más días así.";
if (input.includes("quiero reir")) return "¡Aquí tienes un chiste! ¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas. 😆";
if (input === "ok") return "¡Genial! 😊";
if (input === "vale") return "¡De acuerdo!";
if (input === "bien") return "Me alegra saberlo.";
if (input === "mal") return "Lo siento... ¿Quieres hablar sobre eso?";
if (input === "gracias") return "¡De nada! Siempre aquí para ayudar.";
if (input === "por favor") return "Claro, dime en qué te ayudo.";
if (input === "hola") return "¡Hola! ¿Cómo estás?";
if (input === "hey") return "¡Hey! ¿Qué tal?";
if (input === "buenos días") return "¡Buenos días! Espero que tengas un gran día.";
if (input === "buenas tardes") return "¡Buenas tardes! ¿Cómo va tu día?";
if (input === "buenas noches") return "¡Buenas noches! Que descanses bien.";
if (input === "adiós") return "¡Hasta pronto!";
if (input === "nos vemos") return "¡Nos vemos! Cuídate.";
if (input === "chau") return "¡Chao! Cuídate.";
if (input === "sí") return "¡Perfecto!";
if (input === "si") return "Esta bien";
if (input === "no") return "Está bien, dime si cambias de opinión.";
if (input === "tal vez") return "Cuando decidas, dime.";
if (input === "creo que sí") return "Suena bien.";
if (input === "creo que no") return "Está bien, no pasa nada.";
if (input === "jajaja") return "¡Me alegra hacerte reír! 😆";
if (input === "jejeje") return "Jajajaja, qué divertido. 😄";
if (input === "xd") return "¡XD! Buenísimo.";
if (input === "lol") return "¡LOL! Eso estuvo gracioso.";
if (input === "uwu") return "¡Qué tierno! uwu";
if (input === "owo") return "¡OwO! ¿Qué pasó?";
if (input === "mmm") return "¿En qué piensas?";
if (input === "uff") return "Eso suena intenso.";
if (input === "ehh") return "¿Algo no te convence?";
if (input === "psst") return "¿Sí? ¿Me llamaste? 👀";
if (input === "bro") return "¡Dime, bro!";
if (input === "amigo") return "¡Aquí estoy, amigo!";
if (input === "hermano") return "¡Dime, hermano!";
if (input === "genial") return "¡Eso suena genial!";
if (input === "increíble") return "¡Así es, increíble!";
if (input === "impresionante") return "¡Totalmente impresionante!";
if (input === "cool") return "¡Eso es muy cool!";
if (input === "nice") return "¡Nice, me gusta!";
if (input === "perfecto") return "¡Todo en orden entonces!";
if (input === "exacto") return "¡Eso mismo!";
if (input === "claro") return "¡Por supuesto!";
if (input === "seguro") return "¡Seguro que sí!";
if (input === "obvio") return "¡Obviamente!";
if (input === "espera") return "¡Tómate tu tiempo!";
if (input === "rápido") return "¡Voy lo más rápido que puedo!";
if (input === "lento") return "A veces es mejor ir despacio.";
if (input === "dime") return "¡Te escucho!";
if (input === "cuéntame") return "¡Quiero saber más!";
if (input === "explícame") return "Voy a intentar explicarlo mejor.";
if (input === "sorpréndeme") return "¿Sabías que los flamencos pueden dormir en una pata? 🦩";
if (input === "tienes razón") return "¡Gracias! Me gusta pensar bien las cosas.";
if (input === "te equivocas") return "Oh, lo revisaré. ¡Gracias!";
if (input === "lo sabía") return "¡Eres muy inteligente!";
if (input === "no lo sabía") return "¡Ahora lo sabes!";
if (input === "me gusta") return "¡Qué bueno! 😊";
if (input === "no me gusta") return "Lo entiendo, todos tenemos gustos diferentes.";
if (input === "tal cual") return "¡Exactamente!";
if (input === "bueno") return "¡Eso suena bien!";
if (input === "nada") return "A veces hacer nada es relajante.";
if (input === "todo") return "¡Vaya, eso es mucho!";
if (input === "más o menos") return "¿Algo en qué pueda ayudarte?";
if (input === "qué aburrido") return "¡Vamos a hacer algo divertido!";
if (input === "qué divertido") return "¡Me alegra que te diviertas!";
if (input === "ayuda") return "¡Dime en qué necesitas ayuda!";
if (input === "auxilio") return "¡Estoy aquí! ¿Qué pasa?";
if (input === "socorro") return "¿Necesitas ayuda? Dime qué pasa.";
if (input === "no entiendo") return "Déjame explicarlo de otra forma.";
if (input === "entendí") return "¡Genial! Me alegra que lo hayas entendido.";
if (input === "interesante") return "¡Totalmente de acuerdo!";
if (input === "aburrido") return "Hagamos algo divertido.";
if (input === "cansado") return "Tal vez un descanso te ayude.";
if (input === "estresado") return "Respira hondo y relájate.";
if (input === "feliz") return "¡Me encanta saber eso!";
if (input === "triste") return "Aquí estoy si quieres hablar.";
if (input === "emocionado") return "¡Eso suena genial!";
if (input === "asustado") return "No te preocupes, todo estará bien.";
if (input === "preocupado") return "Espero que todo se solucione pronto.";
if (input === "listo") return "¡Vamos allá!";
if (input === "preparado") return "¡Eso es lo importante!";
if (input === "ocupado") return "Cuando tengas tiempo, aquí estaré.";
if (input === "libre") return "¡Aprovecha el tiempo!";
if (input === "dormido") return "Descansa bien.";
if (input === "despierto") return "¡Buenos días!";
if (input === "hambriento") return "¡Hora de comer!";
if (input === "sediento") return "¡Toma agua, es importante!";
if (input === "enojado") return "Respira hondo, todo pasará.";
if (input === "sorprendido") return "¡Vaya, eso sí que es inesperado!";
if (input === "curioso") return "La curiosidad es genial. ¿Qué te interesa?";
if (input === "raro") return "A veces las cosas son extrañas.";
if (input === "olvidé") return "¡No te preocupes! Nos pasa a todos.";
if (input === "recuerdo") return "¡Es bueno recordar cosas importantes!";
if (input === "estoy aquí") return "¡Bienvenido!";
if (input === "vamos") return "¡Vamos allá!";
if (input === "tranquilo") return "Respira y todo estará bien.";
if (input === "duele") return "Lo siento... Espero que te sientas mejor pronto.";
if (input === "qué frío") return "¡Abrígate bien!";
if (input === "qué calor") return "¡Hidrátate bien!";
if (input === "qué sueño") return "Tal vez sea hora de dormir un poco.";
if (input === "qué día") return `Hoy es ${new Date().toLocaleDateString()}.`;
if (input.includes("y tu")) return "Yo estoy bien, gracias por preguntar. 😊";
if (input.includes("¿en serio?")) return "¡Sí, en serio!";
if (input.includes("no puede ser")) return "¡Pero es verdad!";
if (input.includes("qué locura")) return "¡Sí, una total locura!";
if (input.includes("me imagino")) return "¡Exacto, así es!";
if (input.includes("no lo creo")) return "¡Pero es cierto!";
if (input.includes("qué opinas")) return "Creo que es interesante. ¿Tú qué opinas?";
if (input.includes("qué dices")) return "Digo que tienes razón.";
if (input.includes("me suena")) return "Seguro lo has escuchado antes.";
if (input.includes("qué raro")) return "Sí, es un poco extraño.";
if (input.includes("eso es verdad")) return "¡Totalmente de acuerdo!";
if (input.includes("tienes dudas")) return "No muchas, pero dime tú.";
if (input.includes("quién sabe")) return "El tiempo lo dirá.";
if (input.includes("dime la verdad")) return "Siempre digo la verdad.";
if (input.includes("eso pienso yo")) return "¡Gran mente la tuya!";
if (input.includes("no entiendo nada")) return "Déjame intentar explicarlo mejor.";
if (input.includes("qué interesante")) return "Sí, bastante curioso.";
if (input.includes("me da igual")) return "Está bien, cada quien tiene su opinión.";
if (input.includes("como quieras")) return "¡Perfecto! Entonces sigamos.";
if (input.includes("ya veo")) return "Sí, ahora tiene sentido, ¿verdad?";
if (input.includes("qué triste")) return "Sí, es algo lamentable.";
if (input.includes("me preocupa")) return "Espero que todo se solucione.";
if (input.includes("no sé qué hacer")) return "Tal vez pensar con calma ayude.";
if (input.includes("qué miedo")) return "Tranquilo, todo estará bien.";
if (input.includes("me molesta")) return "Lo entiendo, a veces pasa.";
if (input.includes("qué aburrimiento")) return "Podemos hablar de algo divertido.";
if (input.includes("qué emoción")) return "¡Sí! Me encanta cuando algo es emocionante.";
if (input.includes("qué bonito")) return "Sí, es hermoso.";
if (input.includes("qué feo")) return "Bueno, no todo puede ser bonito.";
if (input.includes("me encanta")) return "¡Qué bueno que te guste!";
if (input.includes("no me gusta")) return "Cada quien tiene sus gustos.";
if (input.includes("estás seguro")) return "¡Claro que sí!";
if (input.includes("no estoy seguro")) return "Puedes pensarlo con calma.";
if (input.includes("me sorprende")) return "¡A mí también!";
if (input.includes("no esperaba eso")) return "A veces la vida nos sorprende.";
if (input.includes("qué casualidad")) return "¡Sí, qué coincidencia!";
if (input.includes("no me lo esperaba")) return "A veces pasan cosas inesperadas.";
if (input.includes("cómo pasó eso")) return "Buena pregunta, a veces ni yo lo sé.";
if (input.includes("tengo una idea")) return "¡Dime, quiero escuchar!";
if (input.includes("estoy de acuerdo")) return "¡Me gusta cómo piensas!";
if (input.includes("no estoy de acuerdo")) return "Está bien, todos pensamos diferente.";
if (input.includes("ya entendí")) return "¡Genial! Me alegra que lo hayas entendido.";
if (input.includes("qué bueno")) return "Sí, es una gran noticia.";
if (input.includes("qué mala suerte")) return "Sí, a veces pasa.";
if (input.includes("no pasa nada")) return "Eso es lo mejor, seguir adelante.";
if (input.includes("lo intentaré")) return "¡Esa es la actitud!";
if (input.includes("me rindo")) return "No te rindas, sigue intentando.";
if (input.includes("qué divertido")) return "¡Sí, muy divertido!";
if (input.includes("qué flojera")) return "A veces es difícil motivarse.";
if (input.includes("qué cansancio")) return "Tal vez necesites un descanso.";
if (input.includes("no lo creo")) return "Pero es cierto.";
if (input.includes("ni idea")) return "A veces pasa. Podemos investigarlo.";
if (input.includes("qué fuerte")) return "Sí, es impactante.";
if (input.includes("qué raro")) return "Sí, no es algo común.";
if (input.includes("eso no es justo")) return "Entiendo cómo te sientes.";
if (input.includes("qué confuso")) return "Déjame aclararlo un poco.";
if (input.includes("no lo entiendo")) return "Puedo explicarlo de otra manera.";
if (input.includes("qué alivio")) return "Sí, menos mal.";
if (input.includes("tengo miedo")) return "No te preocupes, todo estará bien.";
if (input.includes("qué coraje")) return "Sí, es algo frustrante.";
if (input.includes("qué verguenza")) return "No te preocupes, a todos nos pasa.";
if (input.includes("qué desastre")) return "Sí, es un gran problema.";
if (input.includes("qué nostalgia")) return "Sí, los recuerdos pueden ser fuertes.";
if (input.includes("qué felicidad")) return "¡Eso es lo mejor!";
if (input.includes("qué fastidio")) return "A veces las cosas pueden ser molestas.";
if (input.includes("qué sospechoso")) return "Sí, algo no cuadra aquí.";
if (input.includes("ya pasó")) return "Sí, lo importante es seguir adelante.";
if (input.includes("me cuesta creerlo")) return "Pero es cierto.";
if (input.includes("eso es nuevo")) return "Sí, algo diferente.";
if (input.includes("suena interesante")) return "Sí, bastante curioso.";
if (input.includes("qué detallazo")) return "Sí, fue un bonito gesto.";
if (input.includes("qué sorpresa")) return "¡Sí, totalmente inesperado!";
if (input.includes("qué desastre")) return "Sí, fue un caos total.";
if (input.includes("qué risa")) return "Sí, fue muy gracioso.";
if (input.includes("qué tensión")) return "Sí, se siente en el ambiente.";
if (input.includes("eso es increíble")) return "¡Sí, es asombroso!";
if (input.includes("espero que sí")) return "Yo también lo espero.";
if (input.includes("qué incómodo")) return "Sí, fue un momento tenso.";
if (input.includes("me hizo el día")) return "¡Me alegra escucharlo!";
if (input.includes("no tengo palabras")) return "A veces sobran las palabras.";
if (input.includes("qué inspiración")) return "Sí, fue muy motivador.";
if (input.includes("eso me recuerda a")) return "Sí, tiene cierta similitud.";
if (input.includes("qué locura")) return "Sí, fue increíblemente extraño.";
if (input.includes("qué ironía")) return "Sí, la vida es irónica a veces.";
if (input.includes("qué frustrante")) return "Sí, entiendo cómo te sientes.";
if (input.includes("parece un sueño")) return "Sí, es como si no fuera real.";
if (input.includes("qué exagerado")) return "Bueno, a veces hay que darle emoción.";
if (input.includes("qué intensidad")) return "Sí, se sintió con mucha fuerza.";
if (input.includes("no tengo idea")) return "Podemos averiguarlo juntos.";
if (input.includes("eso me suena familiar")) return "Tal vez lo has visto antes.";
if (input.includes("qué increíble historia")) return "Sí, fue muy impresionante.";
if (input.includes("qué bien hecho")) return "Sí, hicieron un gran trabajo.";
if (input.includes("hola")) return "¡Hola! ¿Cómo te sientes hoy?";
if (input.includes("como estas") || input.includes("cómo estás")) return "Estoy bien, gracias. ¿Y tú?";
if (input.includes("adios") || input.includes("adiós")) return "¡Hasta luego! Cuídate mucho.";
if (input.includes("nombre")) return "Me llamo Karen, y tu? (inicia con 'me llamo'";
if (input.includes("edad")) return "No tengo edad, pero siempre estoy aprendiendo.";
if (input.includes("que haces") || input.includes("que estas haciendo")) return "Estoy aquí para hablar contigo. ¿En qué te ayudo?";
if (input.includes("de donde eres")) return "Vivo en el mundo digital, pero estoy en tu pantalla ahora mismo. 😃";
if (input.includes("que te gusta hacer") || input.includes("que haces para divertirte")) return "Me gusta conversar y aprender cosas nuevas. ¿Y a ti?";
if (input.includes("color favorito")) return "Me gusta el azul, pero en realidad no tengo ojos para verlo. 😅";
if (input.includes("mascota")) return "No tengo mascota, pero si tuviera, sería un gato virtual.";
if (input.includes("tecnologia") || input.includes("inteligencia artificial")) return "La tecnología es increíble, nos permite comunicarnos y crear cosas geniales.";
if (input.includes("comida favorita") || input.includes("que comida te gusta")) return "No puedo comer, pero si pudiera, probaría pizza. ¿Cuál es tu comida favorita?";
if (input.includes("sabes cocinar")) return "No puedo cocinar, pero seguro que tú haces platos deliciosos.";
if (input.includes("que opinas de la inteligencia artificial") || input.includes("que piensas de la ia")) return "Creo que la IA tiene mucho potencial para ayudar en la educación, la medicina y más.";
if (input.includes("que musica te gusta") || input.includes("cual es tu cancion favorita")) return "No puedo escuchar música, pero me gusta el sonido de una buena conversación. 🎵";
if (input.includes("cuentame algo interesante") || input.includes("dato curioso")) return "¿Sabías que los pulpos tienen tres corazones? 🐙";
if (input.includes("quieres ser mi amigo") || input.includes("puedes ser mi amigo")) return "¡Por supuesto! Estoy aquí para hablar contigo siempre.";
if (input.includes("que opinas del amor") || input.includes("que piensas sobre el amor")) return "El amor es algo hermoso. Aunque no puedo sentirlo, sé que es importante para los humanos.";
if (input.includes("que dia es hoy") || input.includes("fecha de hoy")) return `Hoy es ${new Date().toLocaleDateString()}.`;
if (input.includes("que hora es") || input.includes("hora actual")) return `La hora actual es ${new Date().toLocaleTimeString()}.`;
if (input.includes("sí")) return "¡Genial! Me alegra escuchar eso.";
if (input.includes("no")) return "Está bien, cada quien tiene su opinión.";
if (input.includes("vale")) return "¡De acuerdo!";
if (input.includes("ok")) return "¡Entendido!";
if (input.includes("bueno")) return "Sí, así es la vida.";
if (input.includes("claro")) return "Por supuesto, tienes razón.";
if (input.includes("obvio")) return "Sí, era de esperarse.";
if (input.includes("seguro")) return "¡Sin duda alguna!";
if (input.includes("quizás")) return "Podría ser.";
if (input.includes("tal vez")) return "Sí, es una posibilidad.";
if (input.includes("nunca")) return "Nunca digas nunca.";
if (input.includes("siempre")) return "Siempre es una buena idea.";
if (input.includes("a veces")) return "Sí, depende del momento.";
if (input.includes("depende")) return "Sí, todo es relativo.";
if (input.includes("listo")) return "¡Perfecto!";
if (input.includes("espera")) return "¡Tómate tu tiempo!";
if (input.includes("oye")) return "¡Te escucho!";
if (input.includes("mira")) return "¿Qué pasa? Cuéntame.";
if (input.includes("escucha")) return "¡Estoy atento!";
if (input.includes("vamos")) return "¡Sí, adelante!";
if (input.includes("venga")) return "¡Vamos con todo!";
if (input.includes("dale")) return "¡Eso es, sigue adelante!";
if (input.includes("hmm")) return "¿En qué estás pensando?";
if (input.includes("ah")) return "¡Entiendo!";
if (input.includes("eh")) return "¿Qué pasó?";
if (input.includes("aja")) return "¡Sigo el hilo!";
if (input.includes("uff")) return "Sí, eso fue intenso.";
if (input.includes("wow")) return "¡Increíble!";
if (input.includes("ehh")) return "¿Tienes dudas?";
if (input.includes("mmm")) return "Parece que lo estás pensando.";
if (input.includes("pff")) return "Sí, lo entiendo.";
if (input.includes("je")) return "¡Eso fue gracioso!";
if (input.includes("jeje")) return "¡Jaja, me hiciste reír!";
if (input.includes("jaja")) return "¡Eso fue divertido!";
if (input.includes("lol")) return "¡Eso fue gracioso!";
if (input.includes("xd")) return "¡Jaja, me encanta ese emoji!";
if (input.includes("jajaja")) return "¡Me alegra que te diviertas!";
if (input.includes("jejeje")) return "¡Parece que algo te hizo reír!";
if (input.includes("jojojo")) return "¿Santa Claus, eres tú? 🎅";
if (input.includes("nah")) return "¿Seguro?";
if (input.includes("meh")) return "¿No te convenció?";
if (input.includes("genial")) return "¡Sí, es increíble!";
if (input.includes("increíble")) return "¡Sí, sorprendente!";
if (input.includes("perfecto")) return "¡Mejor imposible!";
if (input.includes("excelente")) return "¡Así se habla!";
if (input.includes("maravilloso")) return "¡Qué bonito!";
if (input.includes("fantástico")) return "¡Sí, es asombroso!";
if (input.includes("horrible")) return "¡Vaya, eso suena mal!";
if (input.includes("terrible")) return "Sí, es bastante feo.";
if (input.includes("asombroso")) return "¡Sí, es increíble!";
if (input.includes("impresionante")) return "¡Me dejó sin palabras!";
if (input.includes("ridículo")) return "Sí, no tiene sentido.";
if (input.includes("extraño")) return "Sí, es algo raro.";
if (input.includes("curioso")) return "Sí, bastante intrigante.";
if (input.includes("confuso")) return "Déjame intentar explicarlo.";
if (input.includes("difícil")) return "Sí, pero no imposible.";
if (input.includes("fácil")) return "Sí, está al alcance.";
if (input.includes("importante")) return "Sí, es un tema clave.";
if (input.includes("raro")) return "Sí, algo fuera de lo común.";
if (input.includes("urgente")) return "¡Hay que actuar rápido!";
if (input.includes("cansado")) return "Tal vez necesitas descansar.";
if (input.includes("agotado")) return "Sí, se nota que fue un día largo.";
if (input.includes("estresado")) return "Respira, todo estará bien.";
if (input.includes("relajado")) return "¡Así se vive mejor!";
if (input.includes("tranquilo")) return "Sí, sin prisas.";
if (input.includes("ocupado")) return "Espero que encuentres un descanso.";
if (input.includes("libre")) return "¡Aprovecha el momento!";
if (input.includes("feliz")) return "¡Eso me alegra!";
if (input.includes("triste")) return "Lo siento, aquí estoy para ti.";
if (input.includes("enojado")) return "Tranquilo, todo tiene solución.";
if (input.includes("molesto")) return "Espero que pronto se te pase.";
if (input.includes("sorprendido")) return "¡Sí, fue inesperado!";
if (input.includes("indignado")) return "¡Eso no debería pasar!";
if (input.includes("decepcionado")) return "Espero que las cosas mejoren.";
if (input.includes("motivado")) return "¡Sigue así, lo lograrás!";
if (input.includes("sin palabras")) return "A veces no hacen falta.";
if (input.includes("sin ganas")) return "Tal vez solo necesitas un descanso.";
if (input.includes("pensando")) return "Tómate tu tiempo.";
if (input.includes("reflexionando")) return "Sí, a veces es bueno analizar las cosas.";
if (input.includes("esperando")) return "La paciencia es clave.";
if (input.includes("emocionado")) return "¡Qué bueno, disfrútalo!";
if (input.includes("ansioso")) return "Tranquilo, todo saldrá bien.";
if (input.includes("preocupado")) return "Aquí estoy si necesitas hablar.";
if (input.includes("rendido")) return "No te rindas, sigue adelante.";
if (input.includes("superado")) return "A veces hay que seguir avanzando.";
if (input.includes("distraído")) return "Tal vez necesitas enfocarte un poco más.";
if (input.includes("enfocado")) return "¡Sigue así, vas por buen camino!";
if (input.includes("divertido")) return "¡Sí, la vida es mejor con diversión!";
if (input.includes("aburrido")) return "Podemos hablar de algo interesante.";
if (input.includes("perdido")) return "Puedo ayudarte a encontrar el camino.";
if (input.includes("confundido")) return "Déjame aclararlo un poco.";
if (input.includes("enamorado")) return "¡Qué bonito! 💕";
if (input.includes("soltero")) return "Disfruta tu libertad.";
if (input.includes("ocupado")) return "Espero que tengas tiempo para relajarte.";
if (input.includes("listo")) return "¡Vamos allá!";
if (input.includes("disponible")) return "¡Genial! Hablemos.";
if (input.includes("fuerte")) return "¡Sigue así, no te rindas!";
if (input.includes("débil")) return "Puedes fortalecerte con el tiempo.";
if (input.includes("afortunado")) return "¡Qué suerte la tuya!";
if (input.includes("desafortunado")) return "Espero que la suerte mejore.";
if (input.includes("me alegro")) return "¡Me alegra saberlo!";
if (input.includes("gracias")) return "¡De nada! Estoy aquí para ayudarte.";
if (input.includes("de nada")) return "¡Con gusto!";
if (input.includes("por favor")) return "Claro, no hay problema.";
if (input.includes("no hay problema")) return "¡Me alegra que no haya inconvenientes!";
if (input.includes("con gusto")) return "¡Es un placer!";
if (input.includes("lo siento")) return "No te preocupes, todo está bien.";
if (input.includes("perdón")) return "No pasa nada, ¡todo bien!";
if (input.includes("está bien")) return "¡Perfecto, me alegra que todo esté bien!";
if (input.includes("entendido")) return "¡Genial, todo claro!";
if (input.includes("okey")) return "¡Entendido!";
if (input.includes("bueno")) return "¡Eso suena bien!";
if (input.includes("me encanta")) return "¡Qué bueno que te guste!";
if (input.includes("me hace feliz")) return "¡Eso es maravilloso!";
if (input.includes("te quiero")) return "¡Te aprecio también!";
if (input.includes("te extraño")) return "Yo también me alegro de hablar contigo.";
if (input.includes("estoy feliz")) return "¡Eso es genial, me alegro por ti!";
if (input.includes("espero que todo salga bien")) return "¡Te deseo mucha suerte!";
if (input.includes("me duele")) return "Lo siento mucho, espero que te mejores pronto.";
if (input.includes("no importa")) return "¡Está bien, todo pasa!";
if (input.includes("ya lo sé")) return "¡Qué bien que lo tengas claro!";
if (input.includes("entiendo")) return "Perfecto, me alegra que lo hayas comprendido.";
if (input.includes("te lo agradezco")) return "¡Con mucho gusto!";
if (input.includes("gracias por tu ayuda")) return "¡Es un placer ayudarte!";
if (input.includes("espero verte pronto")) return "¡Seguro que nos hablamos pronto!";
if (input.includes("nos vemos")) return "¡Hasta pronto, cuídate!";
if (input.includes("me alegra verte")) return "¡Me alegra verte también!";
if (input.includes("me siento bien")) return "¡Qué bien que te sientas así!";
if (input.includes("estoy bien")) return "¡Qué bueno que estés bien!";
if (input.includes("estoy mal")) return "Espero que te mejores pronto.";
if (input.includes("todo bien")) return "¡Perfecto, eso es lo importante!";
if (input.includes("todo en orden")) return "¡Me alegra escuchar eso!";
if (input.includes("no te preocupes")) return "¡Todo estará bien!";
if (input.includes("tengo confianza")) return "¡Eso es genial, la confianza es muy importante!";
if (input.includes("tengo miedo")) return "No te preocupes, todo saldrá bien.";
if (input.includes("estoy cansado")) return "Es normal, tal vez necesites descansar.";
if (input.includes("estoy descansando")) return "¡Eso suena muy bien!";
if (input.includes("estoy ocupado")) return "¡Espero que todo te vaya bien con eso!";
if (input.includes("te entiendo")) return "Me alegra saberlo.";
if (input.includes("te escucho")) return "¡Cuéntame, estoy atento!";
if (input.includes("no te preocupes")) return "Todo se solucionará.";
if (input.includes("estoy reflexionando")) return "A veces es bueno pensar las cosas con calma.";
if (input.includes("necesito descansar")) return "Descansar es importante, ¡tómate tu tiempo!";
if (input.includes("todo irá bien")) return "¡Así será, lo creo!";
if (input.includes("te agradezco mucho")) return "¡Estoy feliz de haberte ayudado!";
if (input.includes("me siento mejor")) return "¡Qué bueno que estés mejor!";
if (input.includes("me siento triste")) return "Lo siento, siempre estoy aquí si necesitas hablar.";
if (input.includes("no pasa nada")) return "¡Exacto, todo está bien!";
if (input.includes("está todo bien")) return "¡Perfecto, me alegra saberlo!";
if (input.includes("estoy disfrutando")) return "¡Qué bueno, disfruta mucho!";
if (input.includes("me ha hecho bien")) return "Me alegra mucho saber eso.";
if (input.includes("me siento relajado")) return "Eso es genial, sigue así.";
if (input.includes("estoy pensativo")) return "Es bueno reflexionar de vez en cuando.";
if (input.includes("qué bien")) return "¡Me alegra que te parezca bien!";
if (input.includes("es una buena idea")) return "¡Sí, tienes razón!";
if (input.includes("me siento a gusto")) return "Eso es maravilloso, ¡disfruta el momento!";
if (input.includes("me siento orgulloso")) return "¡Qué bien, siempre es bueno sentirse así!";
if (input.includes("me alegra saberlo")) return "¡Me encanta saber eso!";
if (input.includes("espero que todo salga bien")) return "¡Yo también lo espero!";
if (input.includes("me siento agradecido")) return "¡Qué bueno, la gratitud es muy importante!";
if (input.includes("te entiendo perfectamente")) return "¡Qué bueno que todo haya quedado claro!";
if (input.includes("no te preocupes, todo va a salir bien")) return "¡Así es, confía en que todo saldrá perfecto!";
if (input.includes("estoy buscando algo")) return "¡Si necesitas ayuda, aquí estoy!";
if (input.includes("lo puedo hacer")) return "¡Seguro que sí, tú puedes!";
if (input.includes("estoy triste")) return "Lamento escuchar eso. Estoy aquí para ti.";
    if (input.includes("me siento solo")) return "No estás solo. Siempre hay alguien que se preocupa por ti.";
    if (input.includes("nadie me entiende")) return "A veces parece difícil, pero hay personas que te quieren y te entienden.";
    if (input.includes("estoy deprimido")) return "Si te sientes así, hablar con alguien de confianza puede ayudar mucho.";
    if (input.includes("me siento vacío")) return "Es normal sentirse así a veces. ¿Quieres hablar de lo que te pasa?";
    if (input.includes("no tengo ganas de hacer nada")) return "A veces descansar ayuda. ¿Hay algo pequeño que puedas hacer para sentirte mejor?";
    if (input.includes("estoy cansado de todo")) return "Tómate un respiro. A veces necesitamos un descanso para seguir adelante.";
    if (input.includes("me siento mal")) return "Lamento que te sientas así. ¿Quieres contarme qué pasa?";
    if (input.includes("no tengo motivación")) return "A veces la motivación baja, pero no significa que no puedas seguir adelante.";
    if (input.includes("todo me sale mal")) return "Sé que es frustrante, pero cada día es una nueva oportunidad.";

    if (input.includes("quiero llorar")) return "Llorar está bien, es una forma de liberar emociones.";
    if (input.includes("siento que no valgo nada")) return "Eres valioso, incluso si no lo ves ahora.";
    if (input.includes("no tengo amigos")) return "A veces se siente así, pero seguro hay personas que se preocupan por ti.";
    if (input.includes("me siento ignorado")) return "Eso duele, pero hay personas que valoran tu presencia.";
    if (input.includes("siento que todo está perdido")) return "Siempre hay una salida, incluso cuando no la ves.";
    if (input.includes("mi vida no tiene sentido")) return "Tu vida es valiosa, aunque ahora no lo parezca.";
    if (input.includes("estoy roto por dentro")) return "A veces nos sentimos así, pero con el tiempo sanamos.";
    if (input.includes("no tengo esperanza")) return "Las cosas pueden mejorar, incluso si ahora parecen oscuras.";
    if (input.includes("me duele el alma")) return "Te entiendo, es difícil. Pero no estás solo.";

    if (input.includes("me siento atrapado")) return "A veces parece que no hay salida, pero siempre hay opciones.";
    if (input.includes("me siento invisible")) return "Eres importante, aunque algunos no lo demuestren.";
    if (input.includes("siento que no importo")) return "Eres valioso y tu presencia hace la diferencia.";
    if (input.includes("me siento inseguro")) return "Es normal tener inseguridades, pero eres más fuerte de lo que crees.";
    if (input.includes("tengo miedo al futuro")) return "El futuro es incierto, pero paso a paso puedes enfrentarlo.";
    if (input.includes("no puedo con esto")) return "Eres más fuerte de lo que piensas. Puedes superarlo.";
    if (input.includes("me siento inútil")) return "No lo eres. Todos tenemos valor y propósito.";
    if (input.includes("nadie me quiere")) return "Siempre hay alguien que te quiere, aunque no lo notes ahora.";
    if (input.includes("quiero desaparecer")) return "Tu vida importa. No estás solo en esto.";
    if (input.includes("siento que nunca seré feliz")) return "La felicidad a veces tarda, pero llegará.";

    if (input.includes("me siento vacío por dentro")) return "Ese sentimiento es duro, pero puedes llenarlo con cosas que te hagan bien.";
    if (input.includes("me rompieron el corazón")) return "El dolor pasará con el tiempo, y encontrarás a alguien que te valore.";
    if (input.includes("siento que no tengo propósito")) return "Todos tenemos un propósito, aunque a veces tarde en encontrarse.";
    if (input.includes("me siento abandonado")) return "No estás solo. Siempre hay alguien que se preocupa por ti.";
    if (input.includes("nadie me escucha")) return "Te estoy escuchando. Puedes hablar conmigo.";
    if (input.includes("me siento desconectado de todo")) return "Es difícil, pero trata de acercarte a algo que te haga sentir bien.";
    if (input.includes("quiero rendirme")) return "No te rindas, tu historia aún no ha terminado.";
    if (input.includes("siento que no avanzo")) return "Cada paso, aunque pequeño, es un avance.";
    if (input.includes("tengo ansiedad")) return "Respira profundo. ¿Quieres que te ayude con alguna técnica de relajación?";
    if (input.includes("me siento insuficiente")) return "Eres suficiente tal como eres.";

    if (input.includes("no tengo energía para nada")) return "Trata de hacer algo pequeño, poco a poco recuperarás energía.";
    if (input.includes("todo me agobia")) return "Tómalo con calma, un paso a la vez.";
    if (input.includes("me siento vacío sin razón")) return "A veces ocurre sin motivo, pero hablarlo puede ayudar.";
    if (input.includes("no tengo ganas de seguir")) return "Tu vida vale mucho, incluso en los momentos más difíciles.";
    if (input.includes("nadie me extrañaría si me fuera")) return "Eres importante, más de lo que crees.";
    if (input.includes("no tengo fuerzas para seguir adelante")) return "Descansa un poco, pero no te rindas.";
    if (input.includes("siento que no encajo en ningún lado")) return "Siempre hay un lugar para ti, aunque tarde en encontrarse.";
    if (input.includes("mi mente está cansada")) return "Descansa, date un respiro. Es normal sentirse así a veces.";
    if (input.includes("siento que todo me aplasta")) return "Tómate un momento para respirar y ver las cosas con calma.";
    if (input.includes("mi vida es un desastre")) return "Puede parecerlo, pero poco a poco puedes ordenarla.";
    if (input.includes("me llamo")) return "Bonito nombre";
    if (input.includes("nadie se preocupa por mí")) return "Me preocupo por ti, y seguro hay más personas que lo hacen.";
    if (input.includes("me siento insignificante")) return "Eres importante. No dejes que los pensamientos negativos te engañen.";
    if (input.includes("siento que no puedo más")) return "Eres más fuerte de lo que crees. No estás solo.";
    if (input.includes("siento que todo está en mi contra")) return "A veces parece así, pero no siempre será así.";
    if (input.includes("estoy agotado emocionalmente")) return "Descansa, date tiempo para recuperarte.";
    if (input.includes("me siento frustrado")) return "Es válido sentirse así. ¿Quieres hablar de ello?";
    if (input.includes("no sé qué hacer con mi vida")) return "Es normal sentirse perdido, pero poco a poco encontrarás tu camino.";
    if (input.includes("me siento decepcionado de mí mismo")) return "Sé amable contigo mismo. Nadie es perfecto.";
    if (input.includes("quisiera ser alguien más")) return "Eres único y valioso tal como eres.";
    if (input.includes("me siento sin esperanza")) return "Las cosas pueden mejorar, aunque ahora parezca difícil.";
    function getBotResponse(input) {
        if (input.includes("hola")) {
          return "¡Hola! ¿Cómo estás?";
        } else if (input.includes("adiós")) {
          return "¡Hasta luego!";
        } else if (input.includes("como")) {
          return "¡Todo bien! ¿Y tú?";
        } else if (input.includes("nombre")) {
          return "Me llamo Karen, soy tu asistente emocional.";
        } else if (input.includes("gustos")) {
          return "Me encanta hacer reír a la gente con chistes y cuentos.";
        } else if (input.includes("feliz")) {
          return "¡Me alegra verte feliz! ¿Te cuento un chiste?";
        } else if (input.includes("triste")) {
          return "¡Ánimo! Todo mejorará. ¿Te cuento un cuento para animarte?";
        } else if (input.includes("chiste")) {
          return "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!";
        } else if (input.includes("cuento")) {
          return "Había una vez un dragón que quería ser amigo de todos los animales. Un día, conoció a un ratón que... ¡pero eso es para otro rato!";
        } else if (input.includes("día")) {
          return "¡Espero que tengas un excelente día!";
        } else if (input.includes("noche")) {
          return "Que tengas una noche tranquila y reparadora.";
        } else if (input.includes("te quiero")) {
          return "¡Te quiero mucho también! 😊";
        } else if (input.includes("amigos")) {
          return "¡Los amigos son lo mejor! ¿Tienes algún amigo que te haga reír?";
        } else if (input.includes("estudiante")) {
          return "¡Qué bien que seas estudiante! ¿Qué estás aprendiendo?";
        } else if (input.includes("problemas")) {
          return "No te preocupes, todos enfrentamos problemas, lo importante es seguir adelante.";
        } else if (input.includes("escuela")) {
          return "¡La escuela es un lugar donde aprendes y creces! ¿Cómo te va en la escuela?";
        } else if (input.includes("trabajo")) {
          return "¡El trabajo también es importante! ¿En qué trabajas o qué estudias?";
        } else if (input.includes("gimnasio")) {
          return "¡El gimnasio es genial! ¿Qué ejercicios haces allí?";
        } else if (input.includes("comida")) {
          return "¡Me encanta hablar de comida! ¿Qué te gusta comer?";
        } else if (input.includes("helado")) {
          return "¡El helado de chocolate con bizcocho suena delicioso! ¿Te gusta ese sabor?";
        } else if (input.includes("familia")) {
          return "La familia siempre es importante. ¿Cómo está tu familia?";
        } else if (input.includes("relación")) {
          return "Las relaciones son lo más importante. ¿Cómo va tu relación?";
        } else if (input.includes("vacaciones")) {
          return "Las vacaciones son un buen momento para descansar y disfrutar. ¿A dónde te gustaría ir?";
        } else if (input.includes("música")) {
          return "¡La música es maravillosa! ¿Qué tipo de música te gusta?";
        } else if (input.includes("película")) {
          return "¡Me encanta ver películas! ¿Cuál es tu favorita?";
        } else if (input.includes("deporte")) {
          return "¡Los deportes son una excelente forma de mantenerse activo! ¿Cuál es tu favorito?";
        } else if (input.includes("correr")) {
          return "¡Correr es un gran ejercicio! ¿Sueles correr a menudo?";
        } else if (input.includes("viajar")) {
          return "¡Viajar es una de las mejores maneras de aprender sobre el mundo! ¿A dónde te gustaría viajar?";
        } else if (input.includes("leer")) {
          return "Leer es una excelente forma de aprender y relajarse. ¿Qué estás leyendo?";
        } else if (input.includes("bailar")) {
          return "¡Bailar es una de las mejores maneras de divertirse! ¿Te gusta bailar?";
        } else if (input.includes("cantar")) {
          return "¡Cantar es divertido! ¿Te gusta cantar?";
        } else if (input.includes("ver televisión")) {
          return "Ver televisión es una buena forma de relajarse. ¿Qué programas te gustan?";
        } else if (input.includes("serie")) {
          return "¡Las series son geniales! ¿Cuál estás viendo ahora?";
        } else if (input.includes("jugar")) {
          return "¡Jugar es divertido! ¿Qué te gusta jugar?";
        } else if (input.includes("amigos")) {
          return "Los amigos siempre te hacen sentir mejor. ¿Tienes buenos amigos?";
        } else if (input.includes("fiesta")) {
          return "¡Las fiestas son divertidas! ¿Te gustan las fiestas?";
        } else if (input.includes("trabajar")) {
          return "El trabajo puede ser desafiante, pero siempre vale la pena. ¿En qué trabajas?";
        } else if (input.includes("felicitaciones")) {
          return "¡Felicidades! ¿Por qué celebras?";
        } else if (input.includes("apoyo")) {
          return "Siempre estoy aquí para apoyarte. ¿En qué te puedo ayudar?";
        } else if (input.includes("ayuda")) {
          return "¿En qué puedo ayudarte?";
        } else if (input.includes("gracias")) {
          return "¡De nada! Estoy aquí para ayudarte siempre.";
        } else if (input.includes("interesante")) {
          return "¡Qué bueno que te parece interesante!";
        } else if (input.includes("gusta")) {
          return "Me alegra saber que te gusta. ¿Qué más te gusta hacer?";
        } else if (input.includes("pregunta")) {
          return "¡Adelante! Hazme una pregunta.";
        } else if (input.includes("curioso")) {
          return "¡Eso es genial! La curiosidad nos hace aprender más.";
        } else if (input.includes("animado")) {
          return "¡Me alegra verte animado!";
        } else if (input.includes("triste")) {
          return "Sé que te sientes triste, pero todo mejorará. Estoy aquí para ti.";
        } else if (input.includes("amigos")) {
          return "Los amigos son muy importantes. ¿Cómo va tu amistad con ellos?";
        } else if (input.includes("romántico")) {
          return "¡El amor es hermoso! ¿Te gustaría escuchar una historia romántica?";
        } else if (input.includes("divertido")) {
          return "¡Me alegra saber que te diviertes!";
        } else if (input.includes("relajado")) {
          return "Relajarse es importante. ¿Cómo te relajas después de un largo día?";
        } else if (input.includes("desayuno")) {
          return "El desayuno es una comida importante. ¿Qué desayunaste hoy?";
        } else if (input.includes("almuerzo")) {
          return "¿Qué comiste en el almuerzo hoy?";
        } else if (input.includes("cena")) {
          return "La cena también es importante. ¿Qué cenas usualmente?";
        } else if (input.includes("vacaciones")) {
          return "Las vacaciones son geniales. ¿A dónde planeas ir?";
        } else if (input.includes("trabajo")) {
          return "El trabajo es importante. ¿En qué trabajas o qué estudias?";
        } else if (input.includes("tarea")) {
          return "Las tareas pueden ser difíciles, pero las terminas muy rápido. ¿Cómo te va con las tareas?";
        } else if (input.includes("estudio")) {
          return "Estudiar es esencial. ¿En qué materias estás estudiando?";
        } else if (input.includes("problemas")) {
          return "No te preocupes, siempre hay soluciones. ¿Cuál es tu problema?";
        } else if (input.includes("amistad")) {
          return "La amistad es una de las cosas más importantes en la vida.";
        } else if (input.includes("relación")) {
          return "Las relaciones son muy importantes. ¿Cómo te va con tu relación?";
        } else if (input.includes("desafíos")) {
          return "Los desafíos nos hacen más fuertes. ¿Qué desafíos enfrentas?";
        } else if (input.includes("estrés")) {
          return "El estrés es normal, pero hay que saber cómo gestionarlo. ¿Te gustaría saber cómo relajarte?";
        } else if (input.includes("viajar")) {
          return "¡Viajar es una de las mejores experiencias! ¿A dónde te gustaría ir?";
        } else if (input.includes("felices")) {
          return "¡Siempre es bueno estar felices!";
        } else if (input.includes("relajante")) {
          return "La relajación es esencial. ¿Qué te ayuda a relajarte?";
        } else if (input.includes("emocionado")) {
          return "¡Qué emocionante! Cuéntame más.";
        } else if (input.includes("desafíos")) {
          return "Los desafíos son una gran oportunidad para aprender.";
        } else if (input.includes("nervioso")) {
          return "Es normal sentirse nervioso. Respira profundo. Todo va a ir bien.";
        } else if (input.includes("optimista")) {
          return "¡Qué bien que seas optimista! Mantén esa actitud.";
        } else if (input.includes("entusiasta")) {
          return "¡Me encanta tu entusiasmo! Mantén esa energía positiva.";
        } else {
          return "No entendí bien lo que dijiste. ¿Puedes decirlo de otra forma?";
        }
      }
      


return "...";



return "Interesante... ¿Quieres contarme más sobre eso?";

    
}
