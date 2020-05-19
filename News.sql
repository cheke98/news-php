-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 19, 2020 at 06:21 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `News`
--

-- --------------------------------------------------------

--
-- Table structure for table `Article`
--

CREATE TABLE `Article` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(51) NOT NULL,
  `subtitle` varchar(200) NOT NULL,
  `content` varchar(3000) NOT NULL,
  `img_src` varchar(3000) DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `likes` int(10) UNSIGNED DEFAULT 0,
  `editorspick` tinyint(1) DEFAULT 0,
  `id_user_channel` int(10) UNSIGNED DEFAULT NULL,
  `id_user_reporter` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Article`
--

INSERT INTO `Article` (`id`, `title`, `subtitle`, `content`, `img_src`, `creation_date`, `likes`, `editorspick`, `id_user_channel`, `id_user_reporter`) VALUES
(1, '¿Cuánto has ahorrado con los regalos de Epic Games?', 'La tienda de Epic ha regalado juegos desde diciembre de 2018\r\n\r\n', 'Desde diciembre de 2018, la Epic Games Store ha consentido a su comunidad regalando juegos todas las semanas. Esto ha provocado que muchos se pregunten cuánto dinero en gasto de juegos les ha ahorrado esto. Ya tenemos la respuesta.\r\n\r\nRecientemente, PCGamesN sumó el valor de los 108 juegos gratuitos que la Epic Games Store ha regalado desde que iniciaron sus promociones. Esto lo hizo teniendo en cuenta el precio regular de la versión base de cada uno de estos títulos para así dar una idea más acertada del valor de estos regalos.\r\n\r\nUtiliza nuestro código de creador: LEVELUP_COM\r\nCon este cálculo, el medio descubrió que la Epic Games Store ha regalado $2,140.94 USD en juegos. Esto quiere decir que si hubieras comprado todos los juegos que han regalado en esta tienda hubieras gastado aproximadamente $51,287.93 MXN con el tipo de cambio actual ($23.96 MXN por $1 USD).\r\n\r\n¿CUÁLES SON ALGUNOS DE LOS JUEGOS QUE HA REGALADO LA EPIC GAMES STORE?\r\nEn caso de que no lo sepas, la Epic Games Store ha regalado diferentes títulos que van desde proyectos AAA hasta indies interesantes.\r\n\r\nPero, ¿cuáles son algunos de los títulos que han dado en la Epic Games Store? El más reciente y el cual ha dado mucho de qué hablar es Grand Theft Auto V, el exitoso juego de Rockstar Games. Por su parte, también se regaló la trilogía Batman: Arkham y la de LEGO Batman. Asimismo, se dieron copias de Just Cause 4.\r\n\r\nPor si te lo perdiste: aquí están las megaofertas de la Epic Games Store\r\n\r\nCabe mencionar que los regalos de la Epic Games Store seguirán en el futuro cercano. Según rumores, en el futuro cercano se regalarán juegos como Borderlands: The Handsome Collection , Civilization VI y más.\r\n\r\n¿Qué te pareció esta información? ¿Imaginabas que sería tanto? Cuéntanos en los comentarios.', 'https://elandroidelibre.elespanol.com/wp-content/uploads/2019/10/epic-games-android-2.jpg', '2020-05-18 05:37:39', 0, 0, 7, 15),
(6, 'Rumores sobre el anuncio de “God of War 2” en Junio', 'Las franquicias de la PS4 tendrán nueva vida en la nueva consola de Sony', 'Cada vez más se habla del catálogo inicial de la PS5. Sony no quiere decir nada al respecto, debido a que quiere mantener las expectativas en alto hasta el anuncio oficial de la próxima máquina de PlayStation. Ahora, los rumores apuntan a un juego AAA conocido por la comunidad para junio.\r\n\r\nEl youtuber Luke Stephens, conocido en Internet por sus filtraciones sobre PS5, informó que una fuente anónima dentro de Sony adelantó la salida de un nuevo juego “muy esperado” para PS5.\r\n\r\n\r\nEl anuncio hecho en Twitter muestra un gran bloque de hielo. Stephens precisió que el próximo juego de PS5 estará relacionado con dicha escena.\r\n\r\nLas teorías no se hicieron esperar en redes sociales. Los interesados en PS5 creen que se trata de Horizon Zero Dawn 2, debido a que el último DLC se llama The Frozen Wilds. Otra alternativa es God of War 2, cuyo juego anterior fue todo un éxito en PS4 y su historia aún sigue abierta para más aventuras de Kratos.', 'https://media.vandal.net/m/3-2020/20203218232519_1.jpg', '2020-05-18 06:35:02', 0, 1, 7, 15),
(7, 'EU pone en órbita una misteriosa nave científica', 'Una misión que durará más de dos años\r\n', 'Un avión espacial militar estadunidense despegó hoy hacia órbita cargado de experimentos científicos. as autoridades no informaron cuánto tiempo permanecerá la nave en órbita o el propósito de la misión.\r\n\r\nPero Jim Chilton, un vicepresidente de Boeing, el fabricante de los X-37B, dijo que cada misión ha sido cada vez más larga.\r\n\r\nVIAJES LARGOS Y MISTERIOSOS\r\nLa misión anterior duró un récord de dos años, y el año pasado el avión regresó al Centro Espacial Kennedy de la NASA.\r\n\r\nLa nave espacial alada se asemeja a los viejos transbordadores de la NASA, pero mucho más pequeña con solo 9 metros de largo. La recién lanzada cuenta con un compartimento adicional para experimentos, incluidos varios para la NASA y el Laboratorio de Investigación de la Naval, es decir, es el X-37B que ha llevado más carga científica.\r\n\r\nLa Fuerza Aérea tiene dos de estos aviones espaciales reutilizables. Su base de operaciones es un antiguo hangar para transbordadores en el Centro Espacial Kennedy, también en Florida.\r\n\r\nDesde el primer vuelo en 2010, los secretos aviones espaciales habían registrado una órbita combinada de 2 mil 865 días hasta el domingo, es decir “poco menos de ocho años en órbita”, dijo Chilton.\r\n\r\nLa compañía United Launch Alliance proporcionó el cohete Atlas V y dedicó el lanzamiento de este domingo a los trabajadores de la salud y otros que están trabajando en la primera línea de la pandemia.\r\n\r\nEl martes desde Cabo Cañaveral, la empresa SpaceX intentará lanzar otro lote de sus satélites Starlink para el servicio global de internet. Será el último vuelo de SpaceX antes de su primer lanzamiento de astronautas, programado para el 27 de mayo desde el centro Kennedy.', 'https://estaticos.elperiodico.com/resources/jpg/6/7/afp-1az698-1542773499876.jpg', '2020-05-18 06:10:14', 0, 0, 7, 15),
(8, 'Facebook ahora te permite crear un avatar', 'Robándole delicioso a Snapchat de nuevo', 'Mejorar la experiencia de los usuarios se ha convertido en una prioridad para Facebook, red social que aunque mantiene el liderazgo ahora mismo se ve amenazada por otras grandes plataformas que prometen ganar la carrera si bien no en base de suscriptores si en tiempo de usuario y descargas.\r\n\r\nEl ejemplo más cercano y tangible es TikTok, plataforma que con pocos años en el mercado, ha logrado prender las alertas de la red social más grande del mundo.\r\n\r\nLa competencia se endurece\r\nAlgunos números son claros al respecto. Un reciente estudio firmado por We Are Social y Hootsuite indica que en el mundo existen 4.39 mil millones de usuarios de internet de los cuales 3,48 mil millones (es decir casi 9 de cada 10 internautas) son suscriptores y usuarios de una red social. Estas cifras suponen un aumento a tasa anual de 9 por ciento y una penetración mundial del 45 por ciento.\r\n\r\nSi estas cifra son impactantes, más relevante es reconocer el tiempo que las personas destinan a navegar dentro de estos sitios.\r\n\r\nDesde GlobalWebIndex informa que el usuario promedio de redes sociales pasa 2 horas y 16 minutos al día dentro de estos servicios, lo que equivale a cerca de un tercio de su tiempo en internet y una séptima parte del tiempo que tendrá en toda su vida.\r\n\r\nEn este terreno de juego, Facebook aún domina, pero existen otras aplicaciones que con menos tiempo en el mercado se están posicionando de manera importante.Ejemplo claro es un reciente informe entregado por Sensor Tower que indica que Tik Tok ha superado a Facebook e Instagram para convertiste en la segunda red social con más descargas registradas cuando menos en Estados Unidos.\r\n\r\nCon más de 700 millones de descargas y 130 millones de usuarios en el mundo, la app de los clips de 15 segundos se ubica sólo por debajo de WhatsApp en el ranking.\r\n\r\nNuevas funciones, nuevos avatares\r\nCon la intención de hacer frente a este fenómeno, Facebook ha tratado de mantener a la vanguardia su servicio, con el fin de mejorar la experiencia de sus usuarios y así no perder participación en un mercado cada vez más competitivo.\r\n\r\nEn días recientes la ingeniera en software Jane Manchun Wong, adelantaba que pronto los usuarios de Android podrían ver como el color del fondo de su perfil de Facebook se adapta a las tonalidades de su fotografía de perfil.\r\n\r\nAunque esta función está en prueba, lo que si es una realidad es el lanzamiento de avatares dentro de la plataforma.\r\n\r\n', 'https://cdn.slashgear.com/wp-content/uploads/2020/05/facebawgwae-1280x720.jpg', '2020-05-18 06:37:11', 25, 0, 7, 14),
(10, 'WhatsApp: Agregar tu música favorita en tus estados', 'Ahora podrás compartir tu música y canciones favoritas en tus estados\r\n', 'A diferencia de otras redes sociales como Facebook e Instagram, donde se puede compartir música y canciones en las historias, ahora la aplicación de WhatsApp contará con esta nueva función, pero no de la misma forma que en las otras aplicaciones.\r\n\r\nComo bien sabemos, en los estados de WhatsApp te permiten compartir imágenes, videos y GIF animados que al igual que las redes sociales de Facebook e Instagram en sus historias tienen un formato que dura 24 horas desde su publicación. Con la notable diferencia de poder agregar música, sin embargo, existen algunos trucos para lograrlo. A diferencia de Instagram, donde se tiene la función de guardar las historias en el perfil por un tiempo, a pesar de que son historias con duración de 24 horas, WhatsApp no posee estas funciones, por lo tanto, todo lo que publiques en los estados de la aplicación de mensajes no será guardado como en Instagram. Para poder agregar la música a tus estados de WhatsApp lo primero que tienes que hacer es bloquear la cámara trasera de tu celular, colocándolo en una superficie plana para tener una imagen totalmente en negro y fijo.\r\n\r\nDespués de hacer esta acción, se debe tener acceso  a la aplicación de WhatsApp y seleccionar el icono de la cámara. Acto seguido, se activa el reproductor de música de tu celular con tu canción favorita', 'https://www.movilzona.es/app/uploads/2017/08/whatsapp-musica.jpg', '2020-05-18 06:10:32', 0, 0, 7, 15),
(11, 'Pagan 560.000 dólares por tenis de Michael Jordan', 'Los calzó en su primer año y llevan su firma', 'Ya se vendió el par de tenis firmados y usados por Michael Jordan (1984-1985), en su primera temporada en la NBA con los Chicago Bulls. 560.000 dólares pagaron; un récord histórico para un par de zapatillas por las que alguien, aún no identificado, luchó con la prestigiosa casa de subastas Sotheby\'s.Estas eran propiedad del famoso coleccionista de zapatillas, Jordy Geller, y esa cifra rompe la marca que ostentaba un prototipo original de los primeros tenis de Nike que entregó a los corredores de la Universidad de Oregon el cofundador de Nike y entrenador de Oregon Bill Bowerman. Fueron vendidos también por Geller y alcanzaron en la puja los 437,500 dólares en julio del 2019.Estos míticas tenis se vendieron por más de lo que Jordan cobró por usar los Air Jordan durante sus primeros cinco años en la NBA (500,000 dólares al año).Geller, quien había comprado esos tenis en 2012, dijo que se dio cuenta de que probablemente debería separarse de ellos cuando vio la histeria por los artículos de Michael Jordan que se había desatado tras la emisión del documental de ESPN \'The Last Dance\', cuyos dos episodios finales de la serie se emiten este domingo.\"Decidí vender porque ahora, con el éxito del documental \'The Last Dance\', era el momento adecuado. Tus tweets sobre los recuerdos de Michael Jordan me convencieron de venderlos\", dijo Geller. \"Jordy siempre tiene un gran sentido del tiempo para estas cosas\", dijo Brahm Wachter, de Sotheby\'s, quien dirigió la subasta. \"Estamos encantados con el precio. Simplemente habla del increíble legado de Michael Jordan y de que las personas lo reconocen como el mejor deportista que jamás haya jugado\".', 'https://sneakerhistory.com/wp-content/uploads/2019/08/cover-2.jpg', '2020-05-18 06:36:19', 20, 1, 17, 14),
(12, '¿Por qué criticaron a Marion Reimers en Bundesliga?', 'La narradora de Fox Sports fue duramente criticada en redes sociales', 'El balón volvió a rodar y el futbol está de vuelta. La Bundesliga fue la primera de las principales Ligas de Europa en regresar, luego de la pausa obligada que tuvieron que hacer ante la pandemia por el coronavirus, que sigue atacando a distintos países del mundo. Fox Sports es una de las televisoras que tiene los derechos de transmisión de la Liga alemana. En México, distintos narradores y comentaristas de la cadena deportiva fueron los encargados de los partidos. Marion Reimers tuvo participación en el Clásico entre el Borussia Dortmund y el Schalke 04. El Borussia Dortmund se impuso por 4-0 ante el Schalke 04. Erling Haaland fue el encargado de marcar el primer gol en el regreso de la Bundesliga, pero un doblete de Raphael Guerreiro y la anotación de Thorgan Hazard selló la goleada del cuadro que dirige Lucien Favre, que continúa siendo segundo de la general con 54 unidades, el Bayern Múnich es líder con una unidad más, aunque éste jugará mañana ante FC Union Berlin.', 'https://media.metrolatam.com/2020/05/16/marionreimerspub-1f7c79b6d559f035704ec95a418d8a1b-800x400.jpg', '2020-05-18 07:02:12', 24, 0, 7, 14),
(13, 'Alonso en Renault no es imposible, dice Gené', 'Marc Gené, cree que Fernando Alonso volverá a la F1.\r\n', 'La salida de Sebastian Vettel de Ferrari a final de temporada ha provocado que el mercado de pilotos de F1 se mueva y en él ha entrado Fernando Alonso. El asturiano ha insistido en que analizaría la situación de cara a 2021, cuando inicialmente iba a implantarse el nuevo reglamento técnico, pero el aplazamiento un año más debido a la crisis generada por el coronavirus en principio cambia sus planes.\r\n\r\nLa plaza del alemán será cubierta por Carlos Sainz, cuyo asiento en McLaren pasará a manos de Daniel Ricciardo. El sustituto del australiano todavía no se ha anunciado y Renault busca ahora una estrella que encabece el proyecto los franceses.\r\n\r\nEs ahí donde aparece el nombre de Alonso, quien nunca ha cerrado la puerta a volver a la F1 tras su salida en 2018. Los movimientos que se han producido ponen su nombre sobre la mesa.\r\n\r\nUn día antes de que se hiciese oficial la salida de Ricciardo de Renault –con enojo incluido de la marca en el anuncio del adiós–, los de Enstone publicaban en Twitter un wallpaper con una foto del segundo puesto logrado con ellos por el bicampeón de F1 en Francia 2004, a lo que Alonso contestó con otra imagen de aficionados con los colores que llevaba en esa época el equipo acompañada del emoji de un demonio.\r\n\r\nQuien también considera que la vuelta de Alonso a Renault puede ser algo más que un rumor es Marc Gené. El piloto probador de Ferrari conoce bien a su compatriota español y coincidió con él en la etapa del ovetense en Maranello.\r\n\r\n“Yo creo que Fernando Alonso volverá a la Fórmula 1. No tengo ninguna información, pero creo que a él le gustaría volver. No veo imposible que Alonso fiche por Renault. Creo que él va a ver como se desarrolla la temporada y luego verá si tiene algún sitio, pero yo creo que quiere volver”, dijo Gené en la Cadena SER de España.', 'https://cdn-1.motorsport.com/images/amp/z0qrjZ82/s6/formula-1-japanese-gp-2014-l-t-2.jpg', '2020-05-18 06:14:49', 1, 0, 7, 14),
(14, 'Champions y Europa League finalizarán en agosto', 'El presidente de la UEFA señaló que las competiciones se cancelaron por decisión propia', '“Tenemos una idea, pero falta que se establezcan las fechas. Puedo decir que la temporada europea terminará, si todo va como hasta ahora, en agosto”, declaró a beIN Sports.\r\n\r\nCeferin confía que todas las competencias se completen y señaló que las que se cancelaron fue por su propia decisión. “Creo que todas las competencias terminarán sus temporadas y eso incluye la Champions League. Las que no terminaron fue su decisión, pero tendrán que jugar las clasificaciones si quieren jugar en las competencias”, dijo.\r\n\r\n¡Esto te interesa! HEINEKEN México realiza importante donación para combatir la crisis Covid-19\r\n¡Te recomendamos! Winia contribuye al esfuerzo de los médicos con importante donativo\r\nDe igual forma indicó que los clubes franceses (PSG y Lyon) que todavía están activos en las competiciones europeas deberán jugar de locales y si no se les permite tendrán que hacerlo en territorio neutral. “No entiendo cómo las autoridades francesas no los dejen organizar un partido sin gente, pero eso está fuera de mi poder”, agregó\r\n\r\nLa Champions se suspendió en los cuartos de final por lo que quedaron pendientes cuatro juegos; mientras que en la Europa se paró en los octavos, con 10 partidos pendientes de esa ronda.', 'https://media.metrolatam.com/2020/05/17/ceferinchampions-e00fd6a31c0f18d194240dd690624ebc-1200x600.jpg', '2020-05-18 06:27:38', 0, 0, 17, 14),
(15, 'Un jugador del Arsenal se grabó consumiendo crack', 'El francés Alexandre Lacazette es el protagonista del polémico video', 'Mientras la Premier League analiza la fecha para regresar a la actividad pese a la pandemia del coronavirus, el Arsenal ha sumado un inesperado conflicto dentro de su plantilla. Es que este fin de semana el sitio Daily Star publicó un video en el que el delantero Alexandre Lacazette aspira la peligrosa droga “hippy crack”.\r\n\r\nEl club aseguró a través de un portavoz que se tomaba en serio las informaciones de prensa sobre su atacante francés, pero advirtió se trata de un “asunto privado que será tratado internamente”. En la grabación, al goleador se lo ve inhalando óxido de nitrógeno con un globo y él mismo le habría enviado el vídeo desde su casa a sus amigos, según señala el sitio británico.\r\n\r\nEn 2018, imágenes de Lacazette y de sus compañeros de equipo Mesut Özil, Matteo Guendouzi y Pierre-Emerick Aubameyang inhalando ese ‘gas hilarante’ en una discoteca se hicieron públicas. La sustancia, aunque no es ilegal su tenencia en Inglaterra, sí está prohibida su venta a menores de 18 años. Esta droga está de moda en el Reino Unido. Se vende en latas y se inhala mediante globos.\r\n\r\nLos riesgos de consumir el hippy crack son altos, ya que pueden provocar la pérdida de coordinación, pérdida de conciencia e incluso la muerte debido a la falta de oxígeno que llega al cerebro. El efecto de esta droga suele durar aproximadamente un minuto y si se consume en grandes cantidades baja la cantidad de oxígeno en el cuerpo, lo que provoca somnolencia, relajación y puede dañar el cerebro', 'https://pbs.twimg.com/media/DE-AHf4XoAEj0FW.jpg', '2020-05-18 06:35:51', 31, 1, 17, 17),
(16, 'Coworking médico', 'La tendencia de rentar consultorios por hora ha es una excelente opción para médicos', 'Seguramente has escuchado hablar sobre -coworking-, pero quizás no sepas del todo qué es y de qué se trata exactamente. Por eso,te explicaremos brevemente el concepto, cuál es su objetivo y cómo es que ha ido adquiriendo interés en diversas áreas de trabajo, incluso en la de salud.\r\n\r\nEl coworking como tal, es un espacio donde se pueden desarrollar proyectos, sea cual sea la estructura de la empresa: desde freelancers, startups o grandes corporativos. A través de este concepto, se ha encontrado una forma óptima de trabajo, ya que se adapta a las necesidades de trabajo de cada compañía y de sus colaboradores.\r\nEl objetivo, desde que se creó, ha sido tener un espacio de trabajo y poder hacer una gran red de contactos con gente de otros sectores, ya que todos se concentran en un mismo sitio. De esta forma, se comparten gastos y servicios a la vez, fomentando así, la relación entre distintas áreas, proyectos y colaboraciones.\r\n\r\nEntonces, ¿qué es el coworking médico? Si bien, el auge ha ido en crecimiento en la renta de espacios cowork por parte de empresarios o freelancers, pero este tipo de comunidades se ha ido expandiendo a otras áreas, como lo es la salud.', 'https://www.infobae.com/new-resizer/x5Pkzxdm0C0mbac4KdtF5PNg5ZY=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/20101808/La-foto-de-la-nota1.jpg', '2020-05-18 06:32:11', 0, 0, 7, 15),
(17, 'IPN diseña dispositivo para detectar COVID-19', 'El dispositivo se puede conectar al teléfono celular', 'Un dispositivo portátil para la detección del COVID-19 que entrega una respuesta en 15 minutos y que evitaría acudir a un hospital y entrar en contacto con enfermos graves, fue diseñado por investigadores de Instituto Politécnico Nacional (IPN).\r\n\r\n  Learn more\r\n\r\nEl dispositivo se puede conectar al teléfono celular e indicar en tiempo real al médico el resultado, vía correo electrónico. Pero su aplicación está limitada por el costo y el requerimiento de instalaciones especializadas.\r\nLa prueba rápida desarrollada por investigadores del Cinvestav se encuentra lista y el siguiente paso es solicitar su validación ante el Instituto de Diagnóstico y Referencia Epidemiológicos (InDRE) de Mexico, una vez que esto suceda los hospitales y laboratorios autorizados podrán aplicarla.\r\n\r\nEn un comunicado de la institución se relató que un equipo de investigadores del departamento de Biotecnología y Bioingeniería del Centro de Investigación y de Estudios Avanzados (Cinvestav) del IPN desarrolló el aparato.\r\n\r\nEl dispositivo trabaja bajo la técnica de transcripción reversa acoplada a la amplificación isotérmica mediada por bucle (RT-LAMP, por sus siglas en inglés), para hacer la detección \'in situ\' del virus SARS-CoV-2, causante del COVID-19.', 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2019/02/convocatoria-ipn-2019.jpg?fit=1080%2C607&ssl=1', '2020-05-18 06:34:17', 0, 0, 7, 15),
(18, 'OMS advierte de una nueva ola mortal de coronavirus', 'Podría estar acompañada de gripe estacional o sarampión', 'No hay nada que festejar. La Organización Mundial de la Salud pide a los países estar preparados para una nueva ola de contagios de coronavirus que podría ser aún más mortal.Hans Kluge, director europeo de la Organización Mundial de la Salud, reiteró a los países que han bajado las restricciones que es buen momento para fortalecer sus sistemas de salud pública y reforzar las capacidades en hospitales (atención primaria y cuidados intensivos) ya que el final de la pandemia no ha llegado.A la par, Kluge externó su preocupación de que una segunda ola de coronavirus llegue acompañada de otras enfermedades.\"En otoño podríamos tener una segunda ola de Covid-19 y otra de gripe estacional o sarampión\", detalló el directivo.', 'https://www.ssaver.gob.mx/wp-content/uploads/2020/04/covid19-worldmap-800x445.jpg', '2020-05-18 06:38:54', 3, 0, 7, 15),
(19, 'Rusia registraría vacuna contra el coronavirus', 'De momento están en etapa de ensayos preclínicos', 'El segundo país con más infecciones en el mundo, Rusia, anunció a través del director del Centro Nacional de Investigación de Epidemiología y Microbiología Gamalei, Alexander Gunzburg, que podrían tener lista el registro de una vacuna contra el coronavirus en el mes de agosto.El propio especialista explicó que esta posible cura está en etapa de ensayos preclínicos que podrían durar al menos otro mes, en el que se registrará toxicidad, reactogenicidad, entre otros criterios para que pueda ser probada en humanos.\"Creo que para el final del verano registrarán la vacuna. En agosto, espero que todo esté según lo planeado y que no haya sorpresas\", dijo Gunzburg.Igualmente, afirmó que no todo Rusia podría recibirla, pues el Ministerio de Salud está gestionando los suministros de esta cura para maximizar la producción.Rusia registra más de 272 mil personas infectadas por Covid-19 y han comunicado más de 2,500 muertes por esta enfermedad, lo que ha elevado su tasa de mortalidad en el país.', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/16/15896605105462.jpg', '2020-05-18 06:54:36', 0, 0, 18, 15),
(20, 'Coronavirus México 17 de mayo', 'Repasa lo más relevante del Covid-19 en territorio mexicano', 'El coronavirus Covid-19 continúa su expansión a nivel mundial, donde se han reportado más de 4 millones 716 mil casos y 315 mil muertes. En México este domingo 17 de mayo se reportaron 49,219 casos positivos acumulados y 5,177 defunciones, siendo la Ciudad de México la entidad con más fallecimientos (1,332) y Colima la que menos reporta (8).Cabe destacar que en las últimas 24 horas América reportó 45,015 casos; es decir el 51.8% de los confirmados a nivel mundial. Europa sigue a la baja con 22,150 en el último día (25.5%).Te invitamos a repasar en MARCA Claro el minuto a minuto con las noticias más destacadas del día últimos casos, contagios y todo lo relacionado con la enfermedad.Sinaloa no autoriza la venta de bebidas alcohólicas23:45 | El Gobierno de Sinaloa desmintió una noticia falsa que ha circulado en las últimas hora en redes sociales, donde se asegura que a partir de este lunes 18 de mayo se autoriza la venta de bebidas alcohólicas en todo el estado pero con servicio a domicilio. Protección Civil del estado invitó a la gente a no caer en las \'fake news\'. Instalan filtros sanitarios en centros de abasto de Tlaxcala23:30 | Personal de Protección Civil y médicos de las \"Brigadas Cuídate\" en el estado de Tlaxcala instalaron filtros sanitarios en centros de abasto de los municipios de Chiautempan, Apizaco y Zacatelco, con el fin de prevenir contagios por Covid-19. Preparan reapertura de establecimientos turísticos en Morelos23:15 | Este domingo autoridades de Morelos instalaron una mesa de trabajo con empresarios, con el fin de preparar la reapertura de establecimientos turísticos en el estado. Durante la reunión se dejó claro que el estado no cuenta con las condiciones para reactivarse el 18 de mayo y será hasta el 1 de junio, dependiendo de la disminución de casos, que se evalúe la posibilidad de regresar en la segunda quincena del mes a ciertas actividades.Sanitizan vehículos públicos en Tlacolula, Oaxaca23:00 | La Policía Vial del estado de Oaxaca continúa aplicando medidas sanitarias para frenar la expansión del coronavirus Covid-19. Este domingo elementos de seguridad sanitizaron vehículos del servicio público en Tlacolula y en otros puntos como la carretera de la Sierra Sur, se instalaron filtros de control para verificar que los ciudadanos respeten las normas de salud.', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/17/15896915427394.png', '2020-05-18 06:41:23', 3, 0, 7, 15),
(22, 'Los 10 países con más contagios de Covid-19', 'Resaltan Estados Unidos, Rusia y Brasil', 'El Covid-19 sigue pegando fuerte en algunas partes del mundo, mientras el virus va saliendo poco a poco de algunos países, entra con más fuerza en otros.Algunos países en el mundo siguen aumentando los contagios por la pandemia del Covid-19, mientras unos parece que van en la recta final de este brote, existen otros que aumentan cada día más los contagios de este virus que ha cobrado la vida de miles de personas en todo el mundo.Al principio, Europa registró cifras espeluznantes de contagios, mismos que se fueron expandiendo hasta llegar al continente americano, en donde hoy existe un país dentro del top 10 de los más afectados por el coronavirus.Es por eso que en MARCA Claro te presentamos a los 10 países más afectados por el brote de Covid-19.\r\nEstados Unidos | 1.486.757 contagios\r\nRusia | 281.752 contagios\r\nReino Unido | 244.995 contagios\r\nBrasil | 241.080 contagios\r\nEspaña | 230.698 contagios\r\nItalia | 22.435 contagios\r\nFrancia | 179.693 contagios\r\nAlemania | 176.369 contagios\r\nTurquía | 149.435 contagios\r\nIrán | 120.198 contagios', 'https://i.ytimg.com/vi/Q3fHXmI5cQM/maxresdefault.jpg', '2020-05-18 00:54:22', 26, 0, 18, 15),
(23, 'Messi y nueve más', 'Este lunes el Barcelona volverá a entrenarse con un límite de 10 jugadores', 'La vuelta del fútbol en España va paso a paso. Mientras la curva de contagios y fallecidos por día continúa en ritmo descendiente, los clubes trabajan cumpliendo a rajatabla el protocolo impuesto por la Liga, pensando en el regreso a la actividad. Después de una semana de entrenamientos individuales, con resultados positivos para el ente organizador, la segunda semana de trabajo viene con cambios. Es que desde este lunes todos los equipos entrarán en la fase 3 del protocolo y podrán volver a entrenarse en grupos, aunque con un límite máximo de 10 jugadores por turno.\r\nUno de los primeros clubes en anunciar que esta semana comenzará con las prácticas grupales fue el Barcelona de Lionel Messi, que en sus redes sociales publicó un comunicado detallando que, después de un día de descanso, este lunes los jugadores volverán a trabajar en la Ciudad Deportiva, cumpliendo con la nueva modificación. \r\n', 'https://s01.sgp1.digitaloceanspaces.com/large/831309-53172-opwbgqcpvj-1489039137.jpg', '2020-05-18 06:50:19', 9, 0, 17, 17),
(25, 'OMS no encuentra pruebas de contagio por objetos', 'La agencia mundial recomienda, por precaución, la desinfección de superficies', 'La Organización Mundial de la Salud (OMS) todavía no ha encontrado pruebas concluyentes de que el coronavirus pueda contagiarse a través de un contacto con una superficie artificial como pomos de puerta o teclados, según un último informe de la agencia médica de la ONU.\r\n\r\nSin evidencias\r\n“En el momento de la publicación de este informe no se ha relacionado de manera concluyente el contagio con una superficie medioambiental contaminada, según los estudios disponibles”\r\n\r\nSin embargo, la agencia mundial mantiene su recomendación para que continúe la desinfección de superficies y objetos, como medida de precaución, siempre que sea posible y para tranquilidad de la población.\r\n\r\nEl estudio hace referencia a otro informe en el que se precisaba que el virus podría sobrevivir hasta siete días sobre una superficie. En este sentido, la OMS recuerda que estas pruebas fueron realizadas en un laboratorio, lejos de las condiciones del mundo real. “La enfermedad de la Covid-19 se transmite principalmente a través de un contacto físico cercano y por residuos respiratorios”, según el documento de la OMS.\r\n\r\nEn el último informe de la agencia se concluye: “En el momento de la publicación de este informe no se ha relacionado de manera concluyente el contagio con una superficie medioambiental contaminada, según los estudios disponibles”.\r\n\r\nA pesar de esta incertidumbre científica, y sin tener constancia de este tipo de casos, la OMS no descarta que estas superficies puedan alojar otro tipo de virus, de ahí que se insista en su desinfección habitual.', 'https://www.lavanguardia.com/r/GODO/LV/p7/Deportes/2020/05/17/Recortada/20200515-637251493439793063_20200515142514-k57E-U481213281316AP-992x558@LaVanguardia-Web.jpg', '2020-05-18 06:58:07', 0, 0, 18, 18),
(27, 'Canelo da segundo golpe en la pelea con coronavirus', 'La donación de insumos médicos fue para Instituto Nacional de Neurología y Neurocirugía', 'El boxeador Saúl Álvarez Barrangán realizó una segunda donación de insumos médicos para el personal del Instituto Nacional de Neurología y Neurocirugía, de la Ciudad de México.\r\n\r\nRodrigo Uribe, médico residente de dicho hospital, comentó sobre la importancia de tener el material de protección para la atención de pacientes con coronavirus. Cabe señalar que los médicos de varios puntos del país se han manifestado ante la falta de insumos.\r\n\r\n“No nos queda más que agradecerles por todo el apoyo y esfuerzo que han hecho para conseguir el material que necesitamos para seguir atendiendo a nuestros pacientes y a nuestra población. Cada granito es una ayuda, y con esto podemos seguir viendo a cada paciente que llegue”, añadió Rodrigo Uribe para TV Azteca Deportes.\r\n\r\nLa entrega de las cajas, que se identificaron el logo del pugilista, se realizó el martes 12 de mayo.\r\nLa primera entrega que realizó el campeón mexicano fue de 950 kits para los médicos residentes del Hospital Civil de Guadalajara.\r\n\r\n\r\nCada kit contiene una careta protectora, cinco mascarillas N95, lentes protectores, dos trajes protectores.\r\n\r\nUno de los médicos mencionó que la mascarilla N95 cuentan con \"especificaciones muy concretas que nos pueden proteger contra el Covid-19 y son éstas las mascarillas que necesitamos para poder estar protegidos”. Los insumos se repartieron en el hospital el lunes 11 de mayo.\r\n\r\nLa labor altruista fue reconocida por Mauricio Saulaimán, presidente del Consejo Mundial de Boxeo. En su cuenta oficial de Instagram compartió una foto de los médicos con los paquetes y lo acompañó del siguiente mensaje: “El Canelo ha mostrado su gran corazón en diversas ocasiones, pues ha apoyado niños con cáncer y damnificados. Gracias por tu valiosa aportación”.', 'https://i.ytimg.com/vi/kB3v_NjBl34/maxresdefault.jpg', '2020-05-18 01:02:02', 28, 0, 18, 15),
(32, 'Xd', 'xd', 'xd', 'https://images.unsplash.com/photo-1586726972122-f20f59d4bbb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', '2020-05-18 04:53:42', 0, 0, 7, 20);

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(150) NOT NULL,
  `id_article` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`id`, `content`, `id_article`, `id_user`, `creation_date`) VALUES
(1, 'Abajo el patriarcado', 12, 15, '2020-05-18 06:43:53'),
(2, 'Bien apestosos', 11, 15, '2020-05-18 06:44:08'),
(3, 'Te amo Messi', 23, 14, '2020-05-18 06:52:02'),
(4, 'Eres una pistola', 23, 14, '2020-05-18 06:52:10'),
(5, '😘😘😘', 23, 14, '2020-05-18 06:52:27'),
(6, 'Supongo que se acabó...', 18, 14, '2020-05-18 06:53:19');

-- --------------------------------------------------------

--
-- Table structure for table `Request`
--

CREATE TABLE `Request` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user_reporter` int(10) UNSIGNED DEFAULT NULL,
  `id_user_channel` int(10) UNSIGNED DEFAULT NULL,
  `accepted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `user_type` enum('reporter','admin','superuser') DEFAULT NULL,
  `id_user_channel` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `pwd`, `user_type`, `id_user_channel`) VALUES
(7, 'Freelance', 'freelance777@gmail.com', 'free777', 'admin', NULL),
(14, 'Daniel Alcudia', 'angel_alcudia1@hotmail.com', 'A123456', 'reporter', 17),
(15, 'Ezequiel Meraz', 'cheke98@gmail.com', 'cheke98', 'reporter', 18),
(17, 'ESPN', 'espn@gmail.com', 'espn123', 'admin', NULL),
(18, 'OMS', 'oms@gmail.com', 'oms123', 'admin', NULL),
(19, 'Dios', 'dios@gmail.com', 'dios123', 'superuser', NULL),
(20, 'xd', 'xd@gmail.com', 'xd1234', 'reporter', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Article`
--
ALTER TABLE `Article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_channel_art` (`id_user_channel`),
  ADD KEY `id_user_reporter_art` (`id_user_reporter`);

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_article_com` (`id_article`),
  ADD KEY `id_user_com` (`id_user`);

--
-- Indexes for table `Request`
--
ALTER TABLE `Request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_reporter_req` (`id_user_reporter`),
  ADD KEY `id_user_channel_req` (`id_user_channel`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_channel_us` (`id_user_channel`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Article`
--
ALTER TABLE `Article`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Request`
--
ALTER TABLE `Request`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Article`
--
ALTER TABLE `Article`
  ADD CONSTRAINT `id_user_channel_art` FOREIGN KEY (`id_user_channel`) REFERENCES `User` (`id`),
  ADD CONSTRAINT `id_user_reporter_art` FOREIGN KEY (`id_user_reporter`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `id_article_com` FOREIGN KEY (`id_article`) REFERENCES `Article` (`id`),
  ADD CONSTRAINT `id_user_com` FOREIGN KEY (`id_user`) REFERENCES `User` (`id`);

--
-- Constraints for table `Request`
--
ALTER TABLE `Request`
  ADD CONSTRAINT `id_user_channel_req` FOREIGN KEY (`id_user_channel`) REFERENCES `User` (`id`),
  ADD CONSTRAINT `id_user_reporter_req` FOREIGN KEY (`id_user_reporter`) REFERENCES `User` (`id`);

--
-- Constraints for table `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `id_user_channel_us` FOREIGN KEY (`id_user_channel`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
