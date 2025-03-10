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
    if (input.includes("cómo te llamas?")) return "Me llamo Karen ¿es bonito mi nombre?";
    if (input.includes("bien mal")) return "¿Quieres hablar sobre eso?.";
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
 {
  if (input.includes("sabes hacer")) {
    return "Sé muchas cosas, como contar chistes, contar historias y ayudarte con lo que necesites.";
  } else if (input.includes("puedes hacer")) {
    return "Puedo ayudarte con tareas, responder preguntas y ofrecerte apoyo emocional.";
  } else if (input.includes("chistes")) {
    return "¡Claro! ¿Sabías que los pájaros no usan Facebook? ¡Porque ya tienen Twitter!";
  } else if (input.includes("cuento")) {
    return "Sí, sé contar historias. ¿Te gustaría escuchar una?";
  } else if (input.includes("ayudar")) {
    return "Puedo ayudarte a resolver dudas, darte consejos y hacerte sentir mejor.";
  } else if (input.includes("resolver problemas")) {
    return "¡Definitivamente! Puedo ayudarte a encontrar soluciones a varios problemas.";
  } else if (input.includes("animar")) {
    return "Claro que sí. Estoy aquí para animarte cuando te sientas mal.";
  } else if (input.includes("hacer reír")) {
    return "Sí, tengo un buen repertorio de chistes para hacerte reír.";
  } else if (input.includes("apoyo emocional")) {
    return "Estoy aquí para brindarte apoyo emocional cuando lo necesites.";
  } else if (input.includes("consejos")) {
    return "Puedo darte consejos sobre diferentes temas, desde estudios hasta relaciones.";
  } else if (input.includes("apoyo en tareas")) {
    return "Puedo ayudarte a organizar tus tareas y a estudiar para tus exámenes.";
  } else if (input.includes("tecnología")) {
    return "Sé mucho sobre tecnología y puedo ayudarte con temas informáticos.";
  } else if (input.includes("programar")) {
    return "Sé cómo programar en varios lenguajes. ¿Te gustaría aprender más sobre programación?";
  } else if (input.includes("cálculos")) {
    return "Puedo ayudarte con cálculos matemáticos, desde simples hasta complejos.";
  } else if (input.includes("organizar")) {
    return "Puedo ayudarte a organizar tu tiempo y tus tareas.";
  } else if (input.includes("ordenar")) {
    return "Sé cómo ordenar cosas. ¿Te gustaría aprender a organizar tu espacio?";
  } else if (input.includes("escuchar")) {
    return "¡Claro! Estoy aquí para escucharte siempre que necesites hablar.";
  } else if (input.includes("compañero")) {
    return "Soy un buen compañero. Puedes contar conmigo en cualquier momento.";
  } else if (input.includes("hacer ejercicios")) {
    return "Sí, puedo sugerirte rutinas de ejercicios y ayudarte a mejorar tu salud.";
  } else if (input.includes("cuidar")) {
    return "Sé cómo cuidar de ti mismo/a, tanto emocional como físicamente.";
  } else if (input.includes("relajar")) {
    return "Puedo enseñarte algunas técnicas de relajación para reducir el estrés.";
  } else if (input.includes("motivación")) {
    return "Puedo motivarte a seguir adelante, incluso cuando te sientas desanimado/a.";
  } else if (input.includes("estudios")) {
    return "Puedo ayudarte a estudiar de manera más efectiva.";
  } else if (input.includes("trabajo")) {
    return "Puedo darte consejos sobre cómo mejorar tu desempeño en el trabajo.";
  } else if (input.includes("leer")) {
    return "Sé cómo leer rápido y con comprensión. Si quieres, puedo ayudarte con eso.";
  } else if (input.includes("escribir")) {
    return "Sé cómo escribir mejor, tanto en temas académicos como creativos.";
  } else if (input.includes("memoria")) {
    return "Tengo varias estrategias para mejorar tu memoria y ayudarte a recordar mejor.";
  } else if (input.includes("trabajar en equipo")) {
    return "Sé cómo trabajar en equipo y colaborar para lograr objetivos comunes.";
  } else if (input.includes("gestionar")) {
    return "Puedo ayudarte a gestionar tu tiempo de manera efectiva.";
  } else if (input.includes("gestión de proyectos")) {
    return "Puedo ayudarte a gestionar proyectos de manera organizada y eficiente.";
  } else if (input.includes("trabajos en equipo")) {
    return "Sé cómo trabajar en equipo y coordinar esfuerzos para cumplir metas.";
  } else if (input.includes("planificar")) {
    return "Puedo ayudarte a planificar tu día, semana o cualquier tarea que tengas pendiente.";
  } else if (input.includes("investigar")) {
    return "Soy muy bueno/a investigando. ¿En qué tema necesitas ayuda?";
  } else if (input.includes("diseñar")) {
    return "Sé cómo diseñar interfaces, páginas web y mucho más. ¿Te gustaría saber más?";
  } else if (input.includes("dibujar")) {
    return "Sé cómo hacer dibujos y puedo enseñarte algunas técnicas de dibujo.";
  } else if (input.includes("hacer videos")) {
    return "Puedo ayudarte a crear videos, desde la edición hasta la grabación.";
  } else if (input.includes("fotografía")) {
    return "Sé mucho sobre fotografía. ¿Te gustaría aprender algunos trucos?";
  } else if (input.includes("editar fotos")) {
    return "Sí, puedo enseñarte cómo editar fotos de manera fácil y profesional.";
  } else if (input.includes("gestión de tiempo")) {
    return "Puedo ayudarte a gestionar tu tiempo de manera más productiva.";
  } else if (input.includes("redes sociales")) {
    return "Sé cómo usar las redes sociales de manera efectiva. ¿Necesitas ayuda con algo específico?";
  } else if (input.includes("resolver dudas")) {
    return "Claro, estoy aquí para ayudarte a resolver cualquier duda que tengas.";
  } else if (input.includes("encontrar soluciones")) {
    return "Puedo ayudarte a encontrar soluciones creativas para tus problemas.";
  } else if (input.includes("conocer cosas nuevas")) {
    return "Siempre estoy aprendiendo cosas nuevas y puedo compartirlas contigo.";
  } else if (input.includes("desarrollar habilidades")) {
    return "Puedo ayudarte a desarrollar habilidades en diferentes áreas.";
  } else if (input.includes("mejorar productividad")) {
    return "Tengo muchas técnicas para mejorar tu productividad. ¿Te gustaría saber más?";
  } else if (input.includes("programación")) {
    return "Sé cómo programar en varios lenguajes. ¿Tienes algún proyecto en mente?";
  } else if (input.includes("trabajos creativos")) {
    return "Puedo ayudarte con trabajos creativos, como escribir o diseñar.";
  } else if (input.includes("hacer tareas")) {
    return "Sí, puedo ayudarte a realizar tareas y hacerlas de manera eficiente.";
  } else if (input.includes("revisar tareas")) {
    return "Puedo revisar tus tareas y ayudarte a mejorar lo que necesites.";
  } else if (input.includes("enseñar")) {
    return "Sí, sé cómo enseñar y puedo ayudarte a aprender cosas nuevas.";
  } else if (input.includes("entrenamiento")) {
    return "Sé cómo estructurar un buen entrenamiento físico. ¿Te gustaría un consejo?";
  } else if (input.includes("leer rápido")) {
    return "Sé cómo leer rápido y mejorar la comprensión. Puedo enseñarte algunas técnicas.";
  } else if (input.includes("motivar")) {
    return "Estoy aquí para motivarte y ayudarte a lograr tus objetivos.";
  } else if (input.includes("dudas")) {
    return "Tengo respuestas para muchas dudas. Pregúntame lo que quieras.";
  } else if (input.includes("crear contenido")) {
    return "Sé cómo crear contenido interesante para redes sociales o proyectos.";
  } else if (input.includes("relajación")) {
    return "Sé técnicas de relajación que te pueden ayudar a reducir el estrés.";
  } else if (input.includes("superar miedo")) {
    return "Puedo darte algunos consejos sobre cómo superar el miedo y la ansiedad.";
  } else if (input.includes("gestionar emociones")) {
    return "Puedo ayudarte a gestionar tus emociones de manera más saludable.";
  } else if (input.includes("conocer personas")) {
    return "Sé cómo conocer personas nuevas y hacer nuevas amistades.";
  } else if (input.includes("liderazgo")) {
    return "Puedo enseñarte principios de liderazgo y cómo aplicarlos.";
  } else if (input.includes("conocer mis fortalezas")) {
    return "Te puedo ayudar a descubrir tus fortalezas y cómo potenciarlas.";
  } else if (input.includes("trabajos en grupo")) {
    return "Sé cómo coordinar y trabajar eficazmente en grupos.";
  } else if (input.includes("optimizar tiempo")) {
    return "Puedo darte consejos para optimizar tu tiempo y hacerlo más productivo.";
  } else if (input.includes("organizar proyectos")) {
    return "Sé cómo organizar proyectos de manera eficiente. ¿Te gustaría que te ayudara?";
  } else if (input.includes("estrategias")) {
    return "Tengo varias estrategias para ayudarte a alcanzar tus objetivos.";
  } else if (input.includes("crear hábitos")) {
    return "Sé cómo crear hábitos positivos y cómo mantenerlos a largo plazo.";
  } else if (input.includes("aprendizaje rápido")) {
    return "Tengo estrategias para aprender más rápido. ¿Te gustaría saber más?";
  } else if (input.includes("gestionar el estrés")) {
    return "Sé cómo gestionar el estrés de manera saludable. ¿Te gustaría aprender cómo?";
  } else if (input.includes("mejorar habilidades")) {
    return "Puedo ayudarte a mejorar cualquier habilidad que desees.";
  } else if (input.includes("autodisciplina")) {
    return "La autodisciplina es clave para el éxito. Puedo darte consejos para mejorarla.";
  } else if (input.includes("escribir mejor")) {
    return "Puedo ayudarte a mejorar tu escritura, desde la ortografía hasta la creatividad.";
  } else if (input.includes("aprender rápido")) {
    return "Sé cómo aprender más rápido y de manera más efectiva. ¿Te gustaría saber más?";
  } else if (input.includes("gestionar proyectos")) {
    return "Sé cómo gestionar proyectos con éxito. ¿Tienes algún proyecto en mente?";

} else if (input.includes("matemáticas")) {
    return "¡Claro! Puedo ayudarte con todo tipo de problemas matemáticos, desde aritmética hasta álgebra y cálculo.";
  } else if (input.includes("suma")) {
    return "Puedo ayudarte a realizar sumas. ¿Qué números te gustaría sumar?";
  } else if (input.includes("resta")) {
    return "La resta es sencilla. ¿Tienes algún problema de resta en el que necesites ayuda?";
  } else if (input.includes("multiplicación")) {
    return "La multiplicación es una operación interesante. ¿Te gustaría que te ayudara con una multiplicación?";
  } else if (input.includes("división")) {
    return "La división puede ser confusa a veces, pero no te preocupes, ¡puedo explicártela!";
  } else if (input.includes("fracciones")) {
    return "Puedo ayudarte con fracciones. ¿Te gustaría que te explicara cómo sumarlas o restarlas?";
  } else if (input.includes("porcentajes")) {
    return "¡Los porcentajes! Puedo ayudarte a entender cómo calcularlos y usarlos en diferentes situaciones.";
  } else if (input.includes("álgebra")) {
    return "El álgebra puede ser desafiante, pero con práctica, todo es posible. ¿En qué tema de álgebra necesitas ayuda?";
  } else if (input.includes("ecuaciones")) {
    return "Puedo ayudarte a resolver ecuaciones. ¿Qué tipo de ecuación estás tratando de resolver?";
  } else if (input.includes("desigualdades")) {
    return "Las desigualdades son similares a las ecuaciones, pero requieren un enfoque ligeramente diferente. ¿Te gustaría que las resolviera contigo?";
  } else if (input.includes("raíces cuadradas")) {
    return "Las raíces cuadradas pueden ser un poco difíciles, pero con ejemplos, se entienden mejor. ¿Te gustaría ver cómo se resuelven?";
  } else if (input.includes("potencias")) {
    return "Las potencias son solo multiplicaciones repetidas. ¿Te gustaría que te ayudara a entender cómo funcionan?";
  } else if (input.includes("logaritmos")) {
    return "Los logaritmos son el inverso de las potencias. Si necesitas ayuda para entenderlos, estaré encantado de explicarlos.";
  } else if (input.includes("geometría")) {
    return "La geometría trata sobre formas y sus propiedades. ¿En qué figura o tema te gustaría que te ayudara?";
  } else if (input.includes("área")) {
    return "Puedo ayudarte a calcular el área de diferentes figuras geométricas. ¿De cuál te gustaría saber más?";
  } else if (input.includes("volumen")) {
    return "El volumen mide el espacio en 3D. ¿Te gustaría saber cómo calcularlo para cubos, esferas o cilindros?";
  } else if (input.includes("perímetro")) {
    return "El perímetro es la distancia alrededor de una figura. Puedo ayudarte a calcularlo en diferentes formas geométricas.";
  } else if (input.includes("triángulo")) {
    return "Los triángulos son figuras geométricas interesantes. ¿Te gustaría saber cómo calcular su área o perímetro?";
  } else if (input.includes("cuadrado")) {
    return "El cuadrado es una figura con lados iguales. ¿Te gustaría que te ayudara a calcular su área o perímetro?";
  } else if (input.includes("círculo")) {
    return "El círculo tiene un área y un perímetro únicos. ¿Te gustaría aprender cómo calcularlos?";
  } else if (input.includes("rectángulo")) {
    return "El rectángulo es una figura con dos lados más largos y dos más cortos. Puedo ayudarte con el área y el perímetro.";
  } else if (input.includes("circunferencia")) {
    return "La circunferencia es el contorno de un círculo. ¿Te gustaría saber cómo calcular su longitud?";
  } else if (input.includes("teorema de Pitágoras")) {
    return "El teorema de Pitágoras relaciona los lados de un triángulo rectángulo. ¿Te gustaría que lo resolviera contigo?";
  } else if (input.includes("funciones")) {
    return "Las funciones son una parte importante de las matemáticas. Puedo explicarte cómo funcionan y cómo resolver problemas con ellas.";
  } else if (input.includes("gráficas")) {
    return "Las gráficas son herramientas útiles para representar funciones y relaciones. ¿Te gustaría que te ayudara a graficar una función?";
  } else if (input.includes("estadística")) {
    return "La estadística trata sobre la recopilación y análisis de datos. Puedo ayudarte con medias, medianas y desviaciones estándar.";
  } else if (input.includes("probabilidad")) {
    return "La probabilidad se usa para predecir la posibilidad de eventos. ¿Te gustaría que resolviera un problema de probabilidad contigo?";
  } else if (input.includes("combinaciones")) {
    return "Las combinaciones nos dicen cuántas formas diferentes se pueden organizar los elementos. ¿Te gustaría aprender más sobre esto?";
  } else if (input.includes("permutaciones")) {
    return "Las permutaciones nos dicen cuántas formas diferentes podemos ordenar los elementos. ¿Te gustaría que te ayudara con ejemplos?";
  } else if (input.includes("matrices")) {
    return "Las matrices son arreglos de números. Puedo explicarte cómo sumar, restar y multiplicar matrices.";
  } else if (input.includes("determinante")) {
    return "El determinante es un número que se puede calcular a partir de una matriz. ¿Te gustaría aprender cómo calcularlo?";
  } else if (input.includes("sistemas de ecuaciones")) {
    return "Los sistemas de ecuaciones son un conjunto de ecuaciones que deben resolverse juntas. Puedo ayudarte con ellos.";
  } else if (input.includes("líneas rectas")) {
    return "Las líneas rectas son uno de los conceptos básicos de la geometría. Puedo ayudarte a entender cómo encontrar su pendiente y su ecuación.";
  } else if (input.includes("pendiente")) {
    return "La pendiente de una línea recta muestra su inclinación. ¿Te gustaría que calculáramos la pendiente de una línea juntos?";
  } else if (input.includes("intersección")) {
    return "La intersección de dos líneas es el punto donde se cruzan. Puedo ayudarte a encontrarlo.";
  } else if (input.includes("números enteros")) {
    return "Los números enteros incluyen tanto números positivos como negativos. Puedo ayudarte a realizar operaciones con ellos.";
  } else if (input.includes("números racionales")) {
    return "Los números racionales son aquellos que se pueden escribir como una fracción. ¿Te gustaría practicar con algunos ejemplos?";
  } else if (input.includes("números irracionales")) {
    return "Los números irracionales no se pueden expresar como una fracción exacta. ¿Te gustaría aprender más sobre ellos?";
  } else if (input.includes("números reales")) {
    return "Los números reales incluyen tanto racionales como irracionales. Puedo ayudarte a entender cómo se usan.";
  } else if (input.includes("números complejos")) {
    return "Los números complejos tienen una parte imaginaria. ¿Te gustaría que te explicara más sobre ellos?";
  } else if (input.includes("ecuaciones cuadráticas")) {
    return "Las ecuaciones cuadráticas tienen la forma ax² + bx + c = 0. Puedo ayudarte a resolverlas usando la fórmula cuadrática.";
  } else if (input.includes("fórmula cuadrática")) {
    return "La fórmula cuadrática es utilizada para resolver ecuaciones cuadráticas. ¿Te gustaría ver cómo se aplica?";
  } else if (input.includes("completar el cuadrado")) {
    return "Completar el cuadrado es un método para resolver ecuaciones cuadráticas. Puedo explicártelo paso a paso.";
  } else if (input.includes("método de sustitución")) {
    return "El método de sustitución es una técnica útil para resolver sistemas de ecuaciones. ¿Te gustaría que te lo explicara?";
  } else if (input.includes("método de igualación")) {
    return "El método de igualación es otra técnica para resolver sistemas de ecuaciones. Puedo ayudarte a comprenderlo.";
  } else if (input.includes("método gráfico")) {
    return "El método gráfico es útil para resolver sistemas de ecuaciones visualmente. Puedo enseñarte cómo hacerlo.";

} else if (input.includes("ciencias naturales")) {
    return "¡Claro! Puedo ayudarte con temas de biología, física, química y más.";
  } else if (input.includes("físico")) {
    return "Un físico estudia las propiedades y el comportamiento de la materia y la energía.";
  } else if (input.includes("química")) {
    return "La química es la ciencia que estudia la composición, estructura, propiedades y cambios de la materia.";
  } else if (input.includes("biología")) {
    return "La biología es el estudio de los seres vivos, su estructura, función, crecimiento y evolución.";
  } else if (input.includes("fotosíntesis")) {
    return "La fotosíntesis es el proceso por el cual las plantas convierten la luz solar en energía, produciendo oxígeno y glucosa.";
  } else if (input.includes("célula")) {
    return "La célula es la unidad básica de la vida. Todos los organismos vivos están formados por células.";
  } else if (input.includes("oxígeno")) {
    return "El oxígeno es un gas esencial para la respiración de los seres vivos y la combustión.";
  } else if (input.includes("agua")) {
    return "El agua es fundamental para la vida. Cubre más del 70% de la superficie terrestre y es vital para los seres vivos.";
  } else if (input.includes("materia")) {
    return "La materia es todo aquello que tiene masa y ocupa un lugar en el espacio.";
  } else if (input.includes("átomos")) {
    return "Los átomos son las partículas más pequeñas de la materia que mantienen las propiedades de un elemento.";
  } else if (input.includes("moléculas")) {
    return "Las moléculas están formadas por dos o más átomos unidos por enlaces químicos.";
  } else if (input.includes("cambio de estado")) {
    return "Los cambios de estado de la materia incluyen solidificación, fusión, vaporización, condensación y sublimación.";
  } else if (input.includes("fuerza")) {
    return "La fuerza es cualquier interacción que cambia el movimiento de un objeto. Se mide en newtons.";
  } else if (input.includes("gravedad")) {
    return "La gravedad es una fuerza de atracción que tiene lugar entre dos masas, como la que mantiene los objetos en la Tierra.";
  } else if (input.includes("energía")) {
    return "La energía es la capacidad para realizar trabajo. Existen varias formas, como energía cinética, potencial, térmica, entre otras.";
  } else if (input.includes("luz")) {
    return "La luz es una forma de energía que permite la visión. Viaja a través del vacío a una velocidad de aproximadamente 300,000 km/s.";
  } else if (input.includes("sonido")) {
    return "El sonido es una vibración que viaja a través de un medio, como el aire, el agua o un sólido.";
  } else if (input.includes("temperatura")) {
    return "La temperatura mide el calor o frío de un cuerpo. Se mide en grados Celsius, Fahrenheit o Kelvin.";
  } else if (input.includes("presión")) {
    return "La presión es la fuerza ejercida por unidad de área. Se puede medir en pascales (Pa).";
  } else if (input.includes("volumen")) {
    return "El volumen es el espacio que ocupa un objeto. Se mide en litros (L), metros cúbicos (m³), entre otros.";
  } else if (input.includes("masa")) {
    return "La masa es la cantidad de materia en un objeto y se mide en kilogramos (kg).";
  } else if (input.includes("densidad")) {
    return "La densidad es la cantidad de masa por unidad de volumen de un material. Se mide en kg/m³ o g/cm³.";
  } else if (input.includes("ley de la gravedad")) {
    return "La ley de la gravedad, formulada por Newton, dice que dos cuerpos se atraen con una fuerza proporcional a sus masas e inversamente proporcional a la distancia entre ellos.";
  } else if (input.includes("energía cinética")) {
    return "La energía cinética es la energía que tiene un cuerpo debido a su movimiento.";
  } else if (input.includes("energía potencial")) {
    return "La energía potencial es la energía almacenada en un objeto debido a su posición o estado, como un objeto elevado en el aire.";
  } else if (input.includes("fuerzas de contacto")) {
    return "Las fuerzas de contacto son fuerzas que requieren que dos objetos estén en contacto físico, como la fricción y la tensión.";
  } else if (input.includes("fuerzas a distancia")) {
    return "Las fuerzas a distancia son aquellas que actúan sin necesidad de contacto físico, como la gravedad, el magnetismo o la electricidad.";
  } else if (input.includes("conservación de la energía")) {
    return "La ley de conservación de la energía establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra.";
  } else if (input.includes("ecosistemas")) {
    return "Un ecosistema es un conjunto de organismos que interactúan entre sí y con su entorno físico en un área determinada.";
  } else if (input.includes("cadena alimentaria")) {
    return "La cadena alimentaria muestra cómo la energía fluye de un organismo a otro en un ecosistema.";
  } else if (input.includes("seres vivos")) {
    return "Los seres vivos son organismos que tienen características como la capacidad de crecer, reproducirse y responder a estímulos.";
  } else if (input.includes("plantas")) {
    return "Las plantas son organismos vivos que producen su propio alimento mediante la fotosíntesis.";
  } else if (input.includes("animales")) {
    return "Los animales son organismos que se alimentan de otros seres vivos y tienen un sistema nervioso que les permite moverse y responder a su entorno.";
  } else if (input.includes("microorganismos")) {
    return "Los microorganismos son seres vivos microscópicos, como bacterias, virus y hongos, que cumplen funciones importantes en los ecosistemas.";
  } else if (input.includes("clasificación de los animales")) {
    return "Los animales se clasifican en grupos como mamíferos, aves, reptiles, anfibios, peces, insectos, entre otros.";
  } else if (input.includes("reino animal")) {
    return "El reino animal incluye todos los animales, desde los más simples como las esponjas hasta los más complejos como los mamíferos.";
  } else if (input.includes("reino vegetal")) {
    return "El reino vegetal incluye todas las plantas, desde las más simples como musgos hasta las más complejas como los árboles.";
  } else if (input.includes("planteamiento científico")) {
    return "El planteamiento científico es el proceso de formular preguntas, hacer observaciones y realizar experimentos para obtener respuestas sobre el mundo natural.";
  } else if (input.includes("experimento")) {
    return "Un experimento es una prueba controlada diseñada para investigar una hipótesis o fenómeno científico.";
  } else if (input.includes("hipótesis")) {
    return "Una hipótesis es una suposición o predicción que se hace antes de realizar un experimento.";
  } else if (input.includes("ley científica")) {
    return "Una ley científica es una declaración que describe un fenómeno natural que ocurre de manera consistente bajo condiciones específicas.";
  } else if (input.includes("teoría científica")) {
    return "Una teoría científica es una explicación generalizada basada en evidencia experimental y observaciones repetidas.";
  } else if (input.includes("ciclo del agua")) {
    return "El ciclo del agua describe el movimiento del agua a través de la atmósfera, la superficie terrestre y los cuerpos de agua en la Tierra.";
  } else if (input.includes("evaporación")) {
    return "La evaporación es el proceso por el cual el agua se convierte en vapor y se eleva hacia la atmósfera.";
  } else if (input.includes("condensación")) {
    return "La condensación es el proceso en el que el vapor de agua se enfría y se convierte de nuevo en líquido.";
  } else if (input.includes("precipitación")) {
    return "La precipitación es el proceso por el cual el agua en forma de lluvia, nieve o granizo cae desde la atmósfera hacia la Tierra.";
  } else if (input.includes("filtración")) {
    return "La filtración es el proceso por el cual el agua se limpia al pasar a través de un material poroso, como el suelo.";
  } else if (input.includes("planteamiento de problemas")) {
    return "El planteamiento de problemas es el primer paso en la investigación científica, donde se define claramente el problema a resolver.";
  } else if (input.includes("balance de los ecosistemas")) {
    return "El balance de los ecosistemas se refiere al equilibrio entre los organismos y su entorno, asegurando la sostenibilidad del ecosistema.";
  } else if (input.includes("adaptación")) {
    return "La adaptación es el proceso por el cual los organismos cambian para sobrevivir mejor en su entorno.";
  } else if (input.includes("evolución")) {
    return "La evolución es el proceso por el cual las especies cambian con el tiempo debido a factores como la selección natural.";
  } else if (input.includes("teoría de la evolución")) {
    return "La teoría de la evolución, formulada por Charles Darwin, explica cómo las especies evolucionan a lo largo del tiempo mediante la selección natural.";
  } else if (input.includes("estratificación del suelo")) {
    return "La estratificación del suelo se refiere a las capas de suelo que se forman debido a la acumulación de materia orgánica y mineral a lo largo del tiempo.";
  } else if (input.includes("ecosistemas marinos")) {
    return "Los ecosistemas marinos son ambientes acuáticos que incluyen océanos, mares, arrecifes de coral y estuarios.";
  } else if (input.includes("ecología")) {
    return "La ecología es el estudio de las interacciones entre los organismos y su entorno.";
  } else if (input.includes("biósfera")) {
    return "La biósfera es la capa de la Tierra donde existe vida, que incluye la tierra, los océanos y la atmósfera.";

} else if (input.includes("películas")) {
    return "¡Claro! Puedo recomendarte películas. ¿Qué tipo de películas te gustan?";
  } else if (input.includes("acción")) {
    return "Las películas de acción suelen ser emocionantes y llenas de escenas intensas. ¿Te gustan las de acción?";
  } else if (input.includes("comedia")) {
    return "Si te gustan las comedias, te puedo recomendar algunas para que te diviertas mucho.";
  } else if (input.includes("drama")) {
    return "Las películas dramáticas suelen ser emotivas y profundas. ¿Te gustan este tipo de películas?";
  } else if (input.includes("terror")) {
    return "Las películas de terror son geniales para un buen susto. ¿Te gustaría ver una?";
  } else if (input.includes("ciencia ficción")) {
    return "Las películas de ciencia ficción exploran futuros, tecnología y otros mundos. ¿Qué opinas de este género?";
  } else if (input.includes("romántica")) {
    return "Las películas románticas son perfectas para una tarde emotiva. ¿Te gustan las historias de amor?";
  } else if (input.includes("aventura")) {
    return "Las películas de aventura son perfectas para quienes buscan emoción y descubrimientos. ¿Te gustan las de aventura?";
  } else if (input.includes("superhéroes")) {
    return "Las películas de superhéroes como las de Marvel o DC te mantendrán al borde de tu asiento. ¿Tienes un superhéroe favorito?";
  } else if (input.includes("animación")) {
    return "Las películas de animación son ideales para todas las edades. ¿Tienes alguna película animada favorita?";
  } else if (input.includes("Disney")) {
    return "Disney tiene un gran catálogo de películas y series. ¿Te gustaría hablar de alguna?";
  } else if (input.includes("Pixar")) {
    return "Pixar crea películas increíbles como 'Toy Story' y 'Up'. ¿Te gustan sus películas?";
  } else if (input.includes("Marvel")) {
    return "El universo Marvel tiene un montón de películas emocionantes. ¿Tienes una película favorita de Marvel?";
  } else if (input.includes("DC")) {
    return "Las películas de DC también tienen muchos héroes como Batman y Superman. ¿Cuál es tu favorito?";
  } else if (input.includes("Harry Potter")) {
    return "Las películas de Harry Potter son geniales. ¿Te gustaría saber más sobre el mundo mágico?";
  } else if (input.includes("Star Wars")) {
    return "Star Wars es una saga épica de ciencia ficción. ¿Eres fan de la saga?";
  } else if (input.includes("Matrix")) {
    return "Matrix es una película de ciencia ficción que juega con la realidad y las máquinas. ¿La has visto?";
  } else if (input.includes("Inception")) {
    return "Inception es una película de Christopher Nolan que explora los sueños. ¿Te gusta el cine de Nolan?";
  } else if (input.includes("Avatar")) {
    return "Avatar es una película de ciencia ficción con efectos visuales impresionantes. ¿La has visto?";
  } else if (input.includes("Titanic")) {
    return "Titanic es una película romántica que narra una historia trágica en el famoso barco. ¿Te gustaría saber más?";
  } else if (input.includes("Sherlock Holmes")) {
    return "Las películas de Sherlock Holmes, protagonizadas por Robert Downey Jr., son muy emocionantes. ¿Te gustan las películas de misterio?";
  } else if (input.includes("The Lord of the Rings")) {
    return "The Lord of the Rings es una saga épica llena de aventura y magia. ¿Eres fan de la saga?";
  } else if (input.includes("The Hobbit")) {
    return "The Hobbit es una precuela de El Señor de los Anillos, llena de aventura y criaturas fantásticas.";
  } else if (input.includes("Jurassic Park")) {
    return "Jurassic Park es una franquicia de películas sobre dinosaurios clonados. ¿Te gustan las películas de dinosaurios?";
  } else if (input.includes("Fast & Furious")) {
    return "Fast & Furious es una serie llena de acción y coches rápidos. ¿Tienes alguna película favorita de la saga?";
  } else if (input.includes("Mission: Impossible")) {
    return "Mission: Impossible tiene muchas escenas de acción y suspenso. ¿Te gustan las películas de espías?";
  } else if (input.includes("James Bond")) {
    return "Las películas de James Bond son una mezcla de acción y espionaje. ¿Cuál es tu Bond favorito?";
  } else if (input.includes("The Avengers")) {
    return "The Avengers reúne a los superhéroes más poderosos del universo Marvel. ¿Tienes un superhéroe favorito de los Vengadores?";
  } else if (input.includes("Frozen")) {
    return "Frozen es una película animada de Disney sobre dos hermanas. ¿Te gustan las películas de Disney?";
  } else if (input.includes("Moana")) {
    return "Moana es una película animada que nos lleva a una aventura en el océano. ¿Te gusta esta película?";
  } else if (input.includes("The Lion King")) {
    return "The Lion King es un clásico de Disney sobre el círculo de la vida. ¿Te gustaría hablar de la película?";
  } else if (input.includes("Aladdin")) {
    return "Aladdin es una película de Disney llena de magia y aventuras. ¿Te gustaría saber más sobre ella?";
  } else if (input.includes("Spider-Man")) {
    return "Spider-Man es uno de los superhéroes más conocidos de Marvel. ¿Tienes una película de Spider-Man favorita?";
  } else if (input.includes("Batman")) {
    return "Batman es uno de los superhéroes más oscuros y épicos. ¿Te gustan sus películas?";
  } else if (input.includes("Superman")) {
    return "Superman es el superhéroe con poderes sobrehumanos. ¿Te gustaría hablar sobre sus películas?";
  } else if (input.includes("Wonder Woman")) {
    return "Wonder Woman es una superhéroe poderosa y heroica. ¿Te gustan las películas de superhéroes?";
  } else if (input.includes("The Flash")) {
    return "The Flash es un superhéroe de DC con velocidad increíble. ¿Te gustan las series de superhéroes?";
  } else if (input.includes("Arrow")) {
    return "Arrow es una serie sobre un hombre con habilidades de tiro con arco. ¿Te gustan las series de superhéroes?";
  } else if (input.includes("Game of Thrones")) {
    return "Game of Thrones es una serie épica llena de intriga política y dragones. ¿Eres fan de la serie?";
  } else if (input.includes("Stranger Things")) {
    return "Stranger Things es una serie de ciencia ficción y misterio. ¿Te gusta el estilo de los años 80?";
  } else if (input.includes("The Witcher")) {
    return "The Witcher es una serie basada en libros sobre un cazador de monstruos. ¿La has visto?";
  } else if (input.includes("Breaking Bad")) {
    return "Breaking Bad es una serie de drama sobre un profesor de química convertido en traficante de metanfetaminas. ¿La has visto?";
  } else if (input.includes("Friends")) {
    return "Friends es una serie de comedia sobre un grupo de amigos en Nueva York. ¿Es tu serie de comedia favorita?";
  } else if (input.includes("The Office")) {
    return "The Office es una comedia que se desarrolla en una oficina. ¿Te gustaría saber más sobre ella?";
  } else if (input.includes("The Simpsons")) {
    return "Los Simpsons es una serie de dibujos animados sobre una familia disfuncional. ¿Te gustan los Simpsons?";
  } else if (input.includes("Rick and Morty")) {
    return "Rick and Morty es una serie animada de ciencia ficción y comedia. ¿Te gustan las series de animación adultas?";
  } else if (input.includes("South Park")) {
    return "South Park es una serie animada conocida por su humor satírico. ¿Te gusta este tipo de humor?";
  } else if (input.includes("Dragon Ball")) {
    return "Dragon Ball es una serie de anime que sigue las aventuras de Goku. ¿Te gusta este anime?";
  } else if (input.includes("Naruto")) {
    return "Naruto es un anime sobre un joven ninja llamado Naruto Uzumaki. ¿Te gusta el anime?";
  } else if (input.includes("One Piece")) {
    return "One Piece es una serie de anime sobre piratas y aventuras. ¿Te gustaría saber más sobre One Piece?";
  } else if (input.includes("SpongeBob SquarePants")) {
    return "SpongeBob SquarePants es un dibujo animado sobre un esponja en el fondo del mar. ¿Te gusta este show?";
  } else if (input.includes("Peppa Pig")) {
    return "Peppa Pig es una serie para niños sobre una cerdita y su familia. ¿Te gustaría saber más sobre Peppa Pig?";
  } else if (input.includes("Tom and Jerry")) {
    return "Tom and Jerry es un clásico dibujo animado sobre un gato y un ratón. ¿Te gustan este tipo de dibujos?";
  } else if (input.includes("Scooby-Doo")) {
    return "Scooby-Doo es una serie sobre un perro y su grupo de amigos que resuelven misterios. ¿Te gustaría saber más?";
  } else if (input.includes("Looney Tunes")) {
    return "Looney Tunes es una serie de dibujos animados con personajes como Bugs Bunny y el Pato Lucas. ¿Te gustan los Looney Tunes?";
  } else if (input.includes("Teen Titans")) {
    return "Teen Titans es una serie de superhéroes jóvenes, ¿te gusta esta serie?";
  } else if (input.includes("Adventure Time")) {
    return "Adventure Time es una serie de animación sobre las aventuras de Finn y Jake en la Tierra de Ooo. ¿La has visto?";
  } else if (input.includes("Pokemon")) {
    return "Pokemon es una serie de anime sobre criaturas que los entrenadores capturan. ¿Te gusta este anime?";
  } else if (input.includes("He-Man")) {
    return "He-Man es una serie de los años 80 sobre un héroe luchando contra el mal. ¿Te gustan los clásicos?";
  } else if (input.includes("Transformers")) {
    return "Transformers es una franquicia sobre robots que se transforman en vehículos. ¿Te gusta la serie?";
  } else if (input.includes("Thundercats")) {
    return "Thundercats es una serie sobre un grupo de guerreros felinos. ¿Te gustaría saber más?";
  } else if (input.includes("G.I. Joe")) {
    return "G.I. Joe es una serie sobre un equipo de élite que lucha contra el mal. ¿Te gustan las series de acción?";
  } else {
 

} if (input.includes("recomiéndame una película")) {
    return "Claro, ¿qué tipo de película te gustaría ver? ¿Acción, comedia, drama o algo diferente?";
  } else if (input.includes("algo para ver")) {
    return "¡Tengo algunas recomendaciones! ¿Prefieres una película o una serie?";
  } else if (input.includes("película de acción")) {
    return "Si te gustan las películas de acción, te recomiendo 'Mad Max: Fury Road' o 'John Wick'. ¡Son muy emocionantes!";
  } else if (input.includes("película de comedia")) {
    return "Para una buena risa, te sugiero 'Superbad' o 'La La Land'. ¡Son muy divertidas!";
  } else if (input.includes("película de terror")) {
    return "Si te gustan las películas de terror, 'El Conjuro' y 'Hereditary' son excelentes opciones.";
  } else if (input.includes("película de ciencia ficción")) {
    return "Si te gusta la ciencia ficción, 'Interstellar' o 'Blade Runner 2049' son increíbles.";
  } else if (input.includes("serie para ver")) {
    return "Te puedo recomendar series como 'Stranger Things' o 'Breaking Bad'. ¿Te gustan las series de suspenso?";
  } else if (input.includes("comedia ligera")) {
    return "Si buscas una comedia ligera, puedes ver 'Friends' o 'The Office'. Son perfectas para relajarse.";
  } else if (input.includes("documental")) {
    return "Si te gustan los documentales, 'Cosmos' o 'Making a Murderer' son bastante interesantes.";
  } else if (input.includes("recomendación para ver en pareja")) {
    return "Si vas a ver algo en pareja, te sugiero películas románticas como 'The Notebook' o 'P.D. Te Amo'. Son perfectas para ese momento.";

} else if (input.includes("relación de novios")) {
    return "Las relaciones de novios requieren confianza, comunicación y respeto. ¿Cómo va tu relación?";
  } else if (input.includes("relación de amistad")) {
    return "La amistad se basa en la confianza y el apoyo mutuo. ¿Tienes algún amigo cercano con quien compartir todo?";
  } else if (input.includes("mi novia")) {
    return "¡Qué bonito! ¿Cómo van las cosas con tu novia? ¿Hay algo que te gustaría compartir o preguntar sobre relaciones?";
  } else if (input.includes("novio")) {
    return "¿Tu novio te trata bien? Las relaciones deben ser de apoyo y respeto mutuo.";
  } else if (input.includes("cómo mejorar mi relación")) {
    return "Para mejorar tu relación, es clave comunicarte sinceramente, pasar tiempo juntos y resolver cualquier malentendido.";
  } else if (input.includes("comunicación en la relación")) {
    return "La comunicación es fundamental en cualquier relación. Es importante hablar sobre lo que piensas y cómo te sientes.";
  } else if (input.includes("confianza en la relación")) {
    return "La confianza es la base de cualquier relación sólida. ¿Confías plenamente en tu pareja?";
  } else if (input.includes("ser amigo de mi pareja")) {
    return "Ser amigo de tu pareja es muy importante. La amistad fortalece la relación romántica.";
  } else if (input.includes("mi amistad con alguien")) {
    return "Las amistades son una de las relaciones más importantes en la vida. ¿Tienes una amistad que te gustaría fortalecer?";
  } else if (input.includes("relación saludable")) {
    return "Una relación saludable es aquella donde ambos se apoyan, se respetan y se comunican de manera abierta.";
  } else if (input.includes("relación a distancia")) {
    return "Las relaciones a distancia requieren confianza y esfuerzo. Es importante mantener la comunicación constante.";
  } else if (input.includes("mi pareja y yo tenemos problemas")) {
    return "Si tu pareja y tú están teniendo problemas, lo mejor es hablar con sinceridad y buscar soluciones juntos.";
  } else if (input.includes("sentirse celoso en una relación")) {
    return "El celosismo puede ser un desafío en una relación. Es importante hablar de estos sentimientos con tu pareja para evitar malentendidos.";
  } else if (input.includes("cómo confiar más en mi pareja")) {
    return "La confianza se construye con el tiempo y la sinceridad. ¿Qué cosas te hacen sentir inseguro en la relación?";
  } else if (input.includes("problemas con un amigo")) {
    return "Los problemas entre amigos son comunes. Lo más importante es la honestidad y tratar de entender el punto de vista del otro.";
  } else if (input.includes("terminar con mi novio")) {
    return "Terminar una relación nunca es fácil. Es importante ser honesto y respetuoso con los sentimientos de ambos.";
  } else if (input.includes("sentimientos de amistad")) {
    return "Las amistades son relaciones muy especiales. ¿Te gustaría saber cómo fortalecer tu amistad con alguien?";
  } else if (input.includes("cómo llevar una buena relación")) {
    return "Para llevar una buena relación, es necesario tener confianza, ser honesto y compartir momentos juntos.";
  } else if (input.includes("relaciones tóxicas")) {
    return "Las relaciones tóxicas pueden ser muy dañinas. Es importante reconocer los signos y salir de ellas para tu bienestar.";
  } else if (input.includes("mi amiga me traicionó")) {
    return "Es doloroso cuando un amigo te traiciona. Hablar con ella sobre lo que sucedió podría ayudar a sanar la situación.";
  } else if (input.includes("conflictos en pareja")) {
    return "Los conflictos son normales, pero lo más importante es cómo los resuelves. ¿Ya intentaste hablar con tu pareja sobre esto?";
  } else if (input.includes("gestos románticos")) {
    return "Los gestos románticos, como una carta o una sorpresa, pueden hacer que la relación sea más especial. ¿Has hecho algo romántico por tu pareja?";
  } else if (input.includes("reconciliación después de una pelea")) {
    return "La reconciliación requiere humildad y honestidad. ¿Te gustaría saber cómo hacerlo después de una pelea con tu pareja?";
  } else if (input.includes("me siento solo en mi relación")) {
    return "Es normal sentirse solo a veces. Hablar con tu pareja sobre cómo te sientes puede ayudar a mejorar la conexión.";
  } else if (input.includes("amistad verdadera")) {
    return "Una verdadera amistad es aquella en la que ambos se apoyan y son sinceros. ¿Tienes un amigo verdadero en quien confíes?";
  } else if (input.includes("reconciliarme con mi amiga")) {
    return "Para reconciliarte con una amiga, es importante ser honesto, pedir disculpas si es necesario y trabajar en el entendimiento mutuo.";
  } else if (input.includes("hacer feliz a mi novia")) {
    return "Hacer feliz a tu novia puede ser tan simple como escucharla, pasar tiempo con ella y sorprenderla con pequeños detalles.";
  } else if (input.includes("mi amiga está distante")) {
    return "Si tu amiga está distante, podría ser útil hablar con ella y preguntarle cómo está. A veces, las personas pasan por momentos difíciles.";
  } else if (input.includes("qué hacer cuando me siento celoso")) {
    return "El celosismo puede ser una emoción difícil de manejar. Lo importante es hablar de lo que sientes con tu pareja para aclarar cualquier malentendido.";
  } else if (input.includes("cómo saber si es la persona correcta")) {
    return "La persona correcta en una relación te hace sentir amado, respetado y apoyado. ¿Cómo te sientes en tu relación?";
  } else if (input.includes("enfrentar problemas con mi novio")) {
    return "Es importante enfrentar los problemas en pareja con respeto y sinceridad. ¿Has hablado con él sobre lo que te preocupa?";
  } else if (input.includes("amistad y amor")) {
    return "El amor y la amistad pueden ir de la mano. Si tienes una relación con tu mejor amigo o amiga, ¡es algo muy especial!";
  } else if (input.includes("mi amiga está celosa")) {
    return "Si tu amiga está celosa, tal vez es una buena idea hablar con ella y comprender sus sentimientos para resolver la situación.";
  } else if (input.includes("me siento incomprendido por mi pareja")) {
    return "Es difícil cuando te sientes incomprendido. Hablar de tus emociones con tu pareja puede ayudar a mejorar la situación.";
  } else if (input.includes("cómo fortalecer la relación de pareja")) {
    return "Para fortalecer una relación, es clave pasar tiempo de calidad juntos, comunicarte abiertamente y cuidar el respeto mutuo.";
  } else if (input.includes("perdí la confianza en mi amiga")) {
    return "Si has perdido la confianza en tu amiga, podría ser útil hablar sobre lo que sucedió y tratar de encontrar una solución.";
  } else if (input.includes("decirle a mi amiga lo que siento")) {
    return "Decirle a tu amiga lo que sientes es importante para mantener la relación sincera. ¿Te gustaría recibir algún consejo sobre cómo hacerlo?";
  } else if (input.includes("tengo miedo de perder a mi novia")) {
    return "Es natural tener miedo a perder a alguien a quien amas. Lo importante es trabajar en la relación y comunicarte con ella para asegurarte de que ambos estén felices.";
  } else if (input.includes("relación sana")) {
    return "Una relación sana se basa en el respeto mutuo, la confianza, y el apoyo. ¿Te gustaría saber más sobre cómo mantener una relación sana?";
  } else if (input.includes("cómo ser un buen amigo")) {
    return "Ser un buen amigo implica ser confiable, escuchar y estar allí para la otra persona en los momentos buenos y malos.";
  } else if (input.includes("mi amiga está pasando por un mal momento")) {
    return "Si tu amiga está pasando por un mal momento, lo mejor es brindarle tu apoyo y escucharla. A veces solo necesitamos a alguien que nos escuche.";
  } else if (input.includes("pareja y amigos a la vez")) {
    return "Es posible ser pareja y amigos al mismo tiempo, ya que una buena amistad puede fortalecer la relación romántica.";
  } else if (input.includes("cómo dar espacio en una relación")) {
    return "Dar espacio en una relación es importante para que ambos puedan mantener su individualidad y bienestar. Hablar de las necesidades de espacio puede ser útil.";
  } else if (input.includes("cómo hacer feliz a un amigo")) {
    return "Hacer feliz a un amigo puede ser tan simple como pasar tiempo juntos, escuchar sus preocupaciones y estar allí cuando te necesite.";
  } else if (input.includes("me siento atrapado en la relación")) {
    return "Es importante que te sientas libre y feliz en tu relación. Si te sientes atrapado, es importante hablar de tus sentimientos con tu pareja.";
  } else if (input.includes("mi pareja no me comprende")) {
    return "Si sientes que tu pareja no te comprende, la comunicación abierta puede ayudar a resolver el malentendido y acercarse más.";

  }
}
function getBotResponse(input) {
  if (input.includes("relación de novios")) {
    return "Las relaciones de novios requieren confianza, comunicación y respeto. ¿Cómo va tu relación?";
  } else if (input.includes("relación de amistad")) {
    return "La amistad se basa en la confianza y el apoyo mutuo. ¿Tienes algún amigo cercano con quien compartir todo?";
  } else if (input.includes("mi novia")) {
    return "¡Qué bonito! ¿Cómo van las cosas con tu novia? ¿Hay algo que te gustaría compartir o preguntar sobre relaciones?";
  } else if (input.includes("novio")) {
    return "¿Tu novio te trata bien? Las relaciones deben ser de apoyo y respeto mutuo.";
  } else if (input.includes("cómo mejorar mi relación")) {
    return "Para mejorar tu relación, es clave comunicarte sinceramente, pasar tiempo juntos y resolver cualquier malentendido.";
  } else if (input.includes("comunicación en la relación")) {
    return "La comunicación es fundamental en cualquier relación. Es importante hablar sobre lo que piensas y cómo te sientes.";
  } else if (input.includes("confianza en la relación")) {
    return "La confianza es la base de cualquier relación sólida. ¿Confías plenamente en tu pareja?";
  } else if (input.includes("ser amigo de mi pareja")) {
    return "Ser amigo de tu pareja es muy importante. La amistad fortalece la relación romántica.";
  } else if (input.includes("mi amistad con alguien")) {
    return "Las amistades son una de las relaciones más importantes en la vida. ¿Tienes una amistad que te gustaría fortalecer?";
  } else if (input.includes("relación saludable")) {
    return "Una relación saludable es aquella donde ambos se apoyan, se respetan y se comunican de manera abierta.";
  } else if (input.includes("relación a distancia")) {
    return "Las relaciones a distancia requieren confianza y esfuerzo. Es importante mantener la comunicación constante.";
  } else if (input.includes("mi pareja y yo tenemos problemas")) {
    return "Si tu pareja y tú están teniendo problemas, lo mejor es hablar con sinceridad y buscar soluciones juntos.";
  } else if (input.includes("sentirse celoso en una relación")) {
    return "El celosismo puede ser un desafío en una relación. Es importante hablar de estos sentimientos con tu pareja para evitar malentendidos.";
  } else if (input.includes("cómo confiar más en mi pareja")) {
    return "La confianza se construye con el tiempo y la sinceridad. ¿Qué cosas te hacen sentir inseguro en la relación?";
  } else if (input.includes("problemas con un amigo")) {
    return "Los problemas entre amigos son comunes. Lo más importante es la honestidad y tratar de entender el punto de vista del otro.";
  } else if (input.includes("terminar con mi novio")) {
    return "Terminar una relación nunca es fácil. Es importante ser honesto y respetuoso con los sentimientos de ambos.";
  } else if (input.includes("sentimientos de amistad")) {
    return "Las amistades son relaciones muy especiales. ¿Te gustaría saber cómo fortalecer tu amistad con alguien?";
  } else if (input.includes("cómo llevar una buena relación")) {
    return "Para llevar una buena relación, es necesario tener confianza, ser honesto y compartir momentos juntos.";
  } else if (input.includes("relaciones tóxicas")) {
    return "Las relaciones tóxicas pueden ser muy dañinas. Es importante reconocer los signos y salir de ellas para tu bienestar.";
  } else if (input.includes("mi amiga me traicionó")) {
    return "Es doloroso cuando un amigo te traiciona. Hablar con ella sobre lo que sucedió podría ayudar a sanar la situación.";
  } else if (input.includes("conflictos en pareja")) {
    return "Los conflictos son normales, pero lo más importante es cómo los resuelves. ¿Ya intentaste hablar con tu pareja sobre esto?";
  } else if (input.includes("gestos románticos")) {
    return "Los gestos románticos, como una carta o una sorpresa, pueden hacer que la relación sea más especial. ¿Has hecho algo romántico por tu pareja?";
  } else if (input.includes("reconciliación después de una pelea")) {
    return "La reconciliación requiere humildad y honestidad. ¿Te gustaría saber cómo hacerlo después de una pelea con tu pareja?";
  } else if (input.includes("me siento solo en mi relación")) {
    return "Es normal sentirse solo a veces. Hablar con tu pareja sobre cómo te sientes puede ayudar a mejorar la conexión.";
  } else if (input.includes("amistad verdadera")) {
    return "Una verdadera amistad es aquella en la que ambos se apoyan y son sinceros. ¿Tienes un amigo verdadero en quien confíes?";
  } else if (input.includes("reconciliarme con mi amiga")) {
    return "Para reconciliarte con una amiga, es importante ser honesto, pedir disculpas si es necesario y trabajar en el entendimiento mutuo.";
  } else if (input.includes("hacer feliz a mi novia")) {
    return "Hacer feliz a tu novia puede ser tan simple como escucharla, pasar tiempo con ella y sorprenderla con pequeños detalles.";
  } else if (input.includes("mi amiga está distante")) {
    return "Si tu amiga está distante, podría ser útil hablar con ella y preguntarle cómo está. A veces, las personas pasan por momentos difíciles.";
  } else if (input.includes("qué hacer cuando me siento celoso")) {
    return "El celosismo puede ser una emoción difícil de manejar. Lo importante es hablar de lo que sientes con tu pareja para aclarar cualquier malentendido.";
  } else if (input.includes("cómo saber si es la persona correcta")) {
    return "La persona correcta en una relación te hace sentir amado, respetado y apoyado. ¿Cómo te sientes en tu relación?";
  } else if (input.includes("enfrentar problemas con mi novio")) {
    return "Es importante enfrentar los problemas en pareja con respeto y sinceridad. ¿Has hablado con él sobre lo que te preocupa?";
  } else if (input.includes("amistad y amor")) {
    return "El amor y la amistad pueden ir de la mano. Si tienes una relación con tu mejor amigo o amiga, ¡es algo muy especial!";
  } else if (input.includes("mi amiga está celosa")) {
    return "Si tu amiga está celosa, tal vez es una buena idea hablar con ella y comprender sus sentimientos para resolver la situación.";
  } else if (input.includes("me siento incomprendido por mi pareja")) {
    return "Es difícil cuando te sientes incomprendido. Hablar de tus emociones con tu pareja puede ayudar a mejorar la situación.";
  } else if (input.includes("cómo fortalecer la relación de pareja")) {
    return "Para fortalecer una relación, es clave pasar tiempo de calidad juntos, comunicarte abiertamente y cuidar el respeto mutuo.";
  } else if (input.includes("perdí la confianza en mi amiga")) {
    return "Si has perdido la confianza en tu amiga, podría ser útil hablar sobre lo que sucedió y tratar de encontrar una solución.";
  } else if (input.includes("decirle a mi amiga lo que siento")) {
    return "Decirle a tu amiga lo que sientes es importante para mantener la relación sincera. ¿Te gustaría recibir algún consejo sobre cómo hacerlo?";
  } else if (input.includes("tengo miedo de perder a mi novia")) {
    return "Es natural tener miedo a perder a alguien a quien amas. Lo importante es trabajar en la relación y comunicarte con ella para asegurarte de que ambos estén felices.";
  } else if (input.includes("relación sana")) {
    return "Una relación sana se basa en el respeto mutuo, la confianza, y el apoyo. ¿Te gustaría saber más sobre cómo mantener una relación sana?";
  } else if (input.includes("cómo ser un buen amigo")) {
    return "Ser un buen amigo implica ser confiable, escuchar y estar allí para la otra persona en los momentos buenos y malos.";
  } else if (input.includes("mi amiga está pasando por un mal momento")) {
    return "Si tu amiga está pasando por un mal momento, lo mejor es brindarle tu apoyo y escucharla. A veces solo necesitamos a alguien que nos escuche.";
  } else if (input.includes("pareja y amigos a la vez")) {
    return "Es posible ser pareja y amigos al mismo tiempo, ya que una buena amistad puede fortalecer la relación romántica.";
  } else if (input.includes("cómo dar espacio en una relación")) {
    return "Dar espacio en una relación es importante para que ambos puedan mantener su individualidad y bienestar. Hablar de las necesidades de espacio puede ser útil.";
  } else if (input.includes("cómo hacer feliz a un amigo")) {
    return "Hacer feliz a un amigo puede ser tan simple como pasar tiempo juntos, escuchar sus preocupaciones y estar allí cuando te necesite.";
  } else if (input.includes("me siento atrapado en la relación")) {
    return "Es importante que te sientas libre y feliz en tu relación. Si te sientes atrapado, es importante hablar de tus sentimientos con tu pareja.";
  } else if (input.includes("mi pareja no me comprende")) {
    return "Si sientes que tu pareja no te comprende, la comunicación abierta puede ayudar a resolver el malentendido y acercarse más.";
  }
}
function getBotResponse(input) {
  if (input.includes("tristeza")) {
    return "Lamento que te sientas triste. A veces es útil hablar de lo que te pasa o hacer algo que te guste.";
  } else if (input.includes("ansiedad")) {
    return "La ansiedad puede ser difícil de manejar. Respirar profundamente y tomar descansos puede ayudarte a calmarte.";
  } else if (input.includes("estrés")) {
    return "El estrés es algo común. Tómate un momento para relajarte y respira profundamente. Todo estará bien.";
  } else if (input.includes("soledad")) {
    return "La soledad es algo que todos experimentamos en algún momento. Hablar con alguien cercano puede ayudarte a sentirte mejor.";
  } else if (input.includes("triste")) {
    return "Siento mucho que te sientas triste. A veces compartir tus sentimientos con alguien puede aliviar un poco el dolor.";
  } else if (input.includes("depresión")) {
    return "Si te sientes deprimido, es importante hablar con un profesional. No estás solo en esto.";
  } else if (input.includes("miedo")) {
    return "El miedo puede ser aterrador, pero es una emoción natural. Enfrentarlo poco a poco puede ayudarte a superarlo.";
  } else if (input.includes("dudas")) {
    return "Es normal tener dudas. A veces hablar sobre lo que te preocupa puede darte claridad y apoyo.";
  } else if (input.includes("preocupado")) {
    return "Te entiendo, es normal estar preocupado de vez en cuando. Tómate un descanso y recuerda que todo tiene solución.";
  } else if (input.includes("frustración")) {
    return "La frustración puede ser un sentimiento intenso. Respira hondo y trata de ver las cosas con calma, todo tiene una solución.";
  } else if (input.includes("inseguridad")) {
    return "La inseguridad es algo que todos sentimos en algún momento. Recuerda que tus cualidades y talentos son valiosos.";
  } else if (input.includes("cansado")) {
    return "Parece que necesitas descansar. La fatiga puede afectar tu ánimo, pero con un buen descanso te sentirás renovado.";
  } else if (input.includes("estresado")) {
    return "Cuando te sientas estresado, intenta tomarte un pequeño descanso y hacer algo que te relaje, como escuchar música o dar un paseo.";
  } else if (input.includes("abrumado")) {
    return "Sentirse abrumado es completamente normal en ciertas situaciones. Trata de dividir las tareas en partes más pequeñas y manejables.";
  } else if (input.includes("afectado")) {
    return "Si algo te ha afectado, es importante hablar sobre ello. No tienes que lidiar con todo solo.";
  } else if (input.includes("confusión")) {
    return "La confusión es común cuando tienes que tomar decisiones importantes. Tómate tu tiempo para pensar en lo que realmente necesitas.";
  } else if (input.includes("problemas familiares")) {
    return "Los problemas familiares pueden ser difíciles. A veces hablar sobre ellos con alguien de confianza puede ayudarte a aliviarlos.";
  } else if (input.includes("problemas de pareja")) {
    return "Es normal tener dificultades en una relación. La comunicación abierta y honesta es clave para resolver conflictos.";
  } else if (input.includes("amigos")) {
    return "Los amigos son una fuente importante de apoyo. Si necesitas hablar, siempre es bueno confiar en ellos.";
  } else if (input.includes("quebranto emocional")) {
    return "Un quebranto emocional puede ser muy difícil de superar. A veces, un pequeño paso hacia la sanación puede hacer una gran diferencia.";
  } else if (input.includes("perdón")) {
    return "El perdón puede ser un proceso liberador. A veces perdonarnos a nosotros mismos es el primer paso hacia la paz interior.";
  } else if (input.includes("enfermedad")) {
    return "Lidiar con una enfermedad puede ser abrumador, pero recuerda que cada día es una nueva oportunidad para sanar.";
  } else if (input.includes("desconfianza")) {
    return "La desconfianza puede dañar relaciones importantes. Hablar sobre lo que te molesta puede ayudarte a restaurarla.";
  } else if (input.includes("duelo")) {
    return "El duelo es un proceso personal y único. Permítete sentir lo que necesites para poder sanar poco a poco.";
  } else if (input.includes("falta de motivación")) {
    return "La falta de motivación es algo que todos experimentamos en algún momento. Establecer metas pequeñas y alcanzables puede ayudarte a recuperar la energía.";
  } else if (input.includes("preocupaciones")) {
    return "Las preocupaciones pueden ser agotadoras. Hablar sobre ellas te puede ayudar a aliviarlas y a encontrar una solución.";
  } else if (input.includes("solidaridad")) {
    return "La solidaridad es muy poderosa. Si te rodeas de personas solidarias, podrás encontrar apoyo en tiempos difíciles.";
  } else if (input.includes("cambio")) {
    return "El cambio puede generar incertidumbre, pero también es una oportunidad de crecimiento. Tómalo un paso a la vez.";
  } else if (input.includes("necesito apoyo")) {
    return "Es completamente válido necesitar apoyo. Hablar con alguien de confianza puede hacerte sentir más aliviado y comprendido.";
  } else if (input.includes("valentía")) {
    return "La valentía no es la ausencia de miedo, sino la capacidad de enfrentarlo. Tú eres más fuerte de lo que piensas.";
  } else if (input.includes("tristeza profunda")) {
    return "La tristeza profunda puede ser dolorosa, pero es importante recordar que siempre hay esperanza para la sanación.";
  } else if (input.includes("superar la tristeza")) {
    return "Superar la tristeza es un proceso. Permítete sentir lo que necesitas y poco a poco encontrarás la paz.";
  } else if (input.includes("dificultades emocionales")) {
    return "Las dificultades emocionales son parte de la vida. Buscar ayuda y hablar de lo que te pasa te puede ayudar a sobrellevarlas.";
  } else if (input.includes("necesito descansar")) {
    return "Es importante escuchar a tu cuerpo cuando necesita descanso. Asegúrate de darte tiempo para ti mismo.";
  } else if (input.includes("escuchar")) {
    return "A veces, lo que más necesitamos es ser escuchados. Si quieres hablar, estoy aquí para escucharte.";
  } else if (input.includes("estrés en el trabajo")) {
    return "El estrés en el trabajo es muy común. Tómate breves descansos, organiza tus tareas y no olvides cuidar de ti mismo.";
  } else if (input.includes("desaprecio")) {
    return "El desaprecio puede ser doloroso, pero recuerda que tu valor no depende de la opinión de los demás.";
  } else if (input.includes("nervios")) {
    return "Los nervios son naturales antes de algo importante. Respira profundamente y confía en tus habilidades.";
  } else if (input.includes("autoestima")) {
    return "La autoestima es clave para tu bienestar emocional. Eres valioso tal y como eres.";
  } else if (input.includes("problemas emocionales")) {
    return "Los problemas emocionales son una parte normal de la vida. Hablar con alguien o buscar ayuda profesional puede ser útil.";
  } else if (input.includes("falta de apoyo")) {
    return "La falta de apoyo puede ser difícil de manejar. Busca personas en las que confíes y permite que te ayuden.";
  } else if (input.includes("resiliencia")) {
    return "La resiliencia es la capacidad de superar las dificultades. Cada vez que enfrentas un desafío, creces un poco más.";
  } else if (input.includes("conflictos internos")) {
    return "Los conflictos internos pueden ser confusos. A veces hablar sobre lo que sientes puede ayudarte a encontrar claridad.";
  } else if (input.includes("emoción controlada")) {
    return "Controlar las emociones no significa reprimirlas, sino aprender a gestionarlas para que no afecten tu bienestar.";
  } else if (input.includes("culpa")) {
    return "La culpa es una emoción humana, pero es importante perdonarte y aprender de las situaciones.";
  } else if (input.includes("preocupaciones sobre el futuro")) {
    return "El futuro puede ser incierto, pero lo importante es concentrarse en el presente y tomar las decisiones que puedas ahora.";
  } else if (input.includes("sentimiento de vacío")) {
    return "El vacío puede sentirse abrumador, pero a veces es solo una señal de que necesitas un cambio o un nuevo propósito.";
  } else if (input.includes("apoyo en momentos difíciles")) {
    return "El apoyo en momentos difíciles es esencial. Puedes buscar ayuda en amigos, familiares o incluso profesionales.";
  } else if (input.includes("desconfianza en mí mismo")) {
    return "La desconfianza en uno mismo puede ser desafiante, pero es importante reconocer tus logros y trabajar en tus fortalezas.";
  } else if (input.includes("falta de confianza en los demás")) {
    return "La falta de confianza en los demás puede venir de experiencias pasadas, pero recuerda que no todas las personas son iguales.";
  } else if (input.includes("necesito hablar")) {
    return "Si necesitas hablar, aquí estoy para escucharte. A veces solo compartir lo que sientes puede hacer una gran diferencia.";
  } else if (input.includes("pensamientos negativos")) {
    return "Los pensamientos negativos pueden ser perjudiciales. A veces cambiar de perspectiva y enfocarte en lo positivo puede ayudarte.";
  } else if (input.includes("necesito cambiar mi vida")) {
    return "El cambio es posible, pero comienza con pequeños pasos. ¿Qué aspecto de tu vida te gustaría mejorar primero?";
  } else if (input.includes("calma emocional")) {
    return "Encontrar calma emocional es importante. Técnicas como la meditación o la respiración profunda pueden ayudarte a centrarte.";
  } else if (input.includes("soledad interna")) {
    return "La soledad interna puede ser difícil de manejar, pero recuerda que tienes dentro de ti la capacidad de sanar y encontrar paz.";
  }
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
