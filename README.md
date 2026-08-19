[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/LumtpEaP)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24311612&assignment_repo_type=AssignmentRepo)
# 🌐 Sitio Ejemplo — Proyecto Integrador Inicial de Front End

## 📌 Descripción

Este proyecto es una introducción práctica al desarrollo **Front End**, utilizando **HTML, CSS y JavaScript**.

A partir de un sitio web base, deberán analizar su estructura, comprender cómo se relacionan sus diferentes archivos y páginas, y posteriormente **transformarlo y personalizarlo**.

El objetivo no es solamente modificar textos o colores, sino comenzar a comprender cómo se construye un sitio web utilizando diferentes tecnologías y cómo estas trabajan en conjunto.

La idea es avanzar progresivamente desde:

**HTML → CSS → JavaScript → Git/GitHub**

para luego utilizar estos conocimientos como base para tecnologías como **PHP y Laravel**.

---

# 📁 Estructura inicial del proyecto

El proyecto base contiene una estructura similar a la siguiente:

```text
sitio-ejemplo/
│
├── index.html
├── nosotros.html
├── servicios.html
├── contacto.html
│
├── css/
│   └── estilos.css
│
├── js/
│   └── script.js
│
└── assets/
    └── favicon.png
```

Cada parte del proyecto tiene una responsabilidad diferente:

| Archivo / carpeta | Función                                     |
| ----------------- | ------------------------------------------- |
| `index.html`      | Página principal                            |
| `nosotros.html`   | Información sobre la empresa/proyecto       |
| `servicios.html`  | Servicios ofrecidos                         |
| `contacto.html`   | Formulario de contacto                      |
| `css/estilos.css` | Diseño y presentación visual                |
| `js/script.js`    | Comportamiento e interacción                |
| `assets/`         | Recursos del sitio, como imágenes y favicon |

---

# 1. 🏗️ HTML — Estructura del sitio

El primer objetivo es analizar cómo está construida una página HTML.

Entre las principales etiquetas utilizadas encontrarán:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Estas etiquetas permiten construir una **estructura semántica**.

HTML no se encarga principalmente de definir los colores, tamaños o animaciones del sitio.

Su función fundamental es definir **qué contenido existe y qué significado tiene cada parte**.

También encontrarán elementos como:

```html
<a>
<img>
<h1>
<p>
<ul>
<li>
<form>
<input>
<textarea>
<button>
```

Deberán analizar qué función cumple cada una de estas etiquetas.

---

# 2. 🔗 Enlaces entre páginas

Una característica importante del proyecto es que **no existe una única página HTML**.

Las diferentes páginas están relacionadas mediante enlaces.

Por ejemplo:

```html
<a href="index.html">Inicio</a>

<a href="nosotros.html">Nosotros</a>

<a href="servicios.html">Servicios</a>

<a href="contacto.html">Contacto</a>
```

La estructura inicial es:

```text
index.html
    │
    ├── nosotros.html
    │
    ├── servicios.html
    │
    └── contacto.html
```

Las páginas también contienen enlaces que permiten regresar a `index.html`.

### 🎯 Objetivo

Comprender cómo crear un sitio compuesto por **varios documentos HTML relacionados entre sí**.

---

# 3. 🎨 CSS — Presentación visual

El proyecto utiliza una hoja de estilos externa:

```html
<link rel="stylesheet" href="css/estilos.css">
```

Esta línea permite vincular el documento HTML con el archivo CSS.

Para comprender la diferencia entre HTML y CSS, pueden realizar una prueba:

### Prueba

Quiten temporalmente:

```html
<link rel="stylesheet" href="css/estilos.css">
```

y vuelvan a abrir la página en el navegador.

Observarán que el contenido continúa existiendo, pero cambia completamente su presentación visual.

Esto permite comprender:

> **HTML = estructura**

> **CSS = presentación**

CSS se utiliza para trabajar, entre otras cosas, con:

* colores;
* tamaños;
* tipografías;
* márgenes;
* espacios;
* bordes;
* fondos;
* Flexbox;
* Grid;
* diseño responsive;
* animaciones y transiciones.

---

# 4. ⚙️ JavaScript — Comportamiento

El proyecto también incorpora JavaScript mediante:

```html
<script src="js/script.js"></script>
```

JavaScript permite agregar **comportamiento e interacción** a la página.

Para comprobarlo, pueden quitar temporalmente esta línea y volver a cargar el sitio.

Observarán que:

* el menú móvil deja de funcionar;
* el formulario deja de mostrar el mensaje;
* algunas interacciones dejan de funcionar;
* pero la estructura HTML y el diseño CSS continúan funcionando.

Esto permite introducir una idea fundamental:

> **HTML estructura, CSS presenta y JavaScript agrega comportamiento.**

---

# 🚀 Actividades

A partir del proyecto base deberán transformar el sitio y adaptarlo a una empresa, emprendimiento, organización o proyecto elegido por ustedes.

---

## Actividad 1 — Cambiar la identidad del sitio

Cambiar el nombre:

```text
NovaWeb
```

por el nombre de la empresa, organización o proyecto elegido.

También deberán modificar el logotipo textual y los textos relacionados con la identidad del sitio.

---

## Actividad 2 — Modificar el contenido

Modificar los textos de las cuatro páginas:

```text
index.html
nosotros.html
servicios.html
contacto.html
```

El contenido deberá estar relacionado con la temática elegida.

No deberán limitarse a cambiar una o dos palabras: deberán adaptar el contenido general del sitio.

---

## Actividad 3 — Crear una quinta página

Crear una nueva página:

```text
portfolio.html
```

La página deberá contener información sobre proyectos, trabajos realizados, productos, fotografías o cualquier contenido relacionado con la temática elegida.

Además, deberán agregarla al menú de navegación.

Por ejemplo:

```html
<a href="portfolio.html">
    Portfolio
</a>
```

La estructura del sitio deberá pasar a ser:

```text
index.html
    │
    ├── nosotros.html
    │
    ├── servicios.html
    │
    ├── portfolio.html
    │
    └── contacto.html
```

---

## Actividad 4 — Incorporar imágenes

Agregar imágenes relacionadas con el contenido del sitio.

Se recomienda crear una carpeta:

```text
assets/
```

y colocar allí los recursos multimedia.

Por ejemplo:

```text
assets/
├── favicon.png
├── imagen1.jpg
├── imagen2.jpg
└── imagen3.jpg
```

Las imágenes deberán utilizar correctamente el atributo `alt`.

Ejemplo:

```html
<img
    src="assets/imagen1.jpg"
    alt="Descripción de la imagen"
>
```

---

## Actividad 5 — Modificar los colores

El archivo CSS utiliza variables para definir los colores principales:

```css
:root {

    --primario: #635bff;

    --primario-oscuro: #4d46d8;

}
```

Modificar estos valores para crear una identidad visual propia.

Por ejemplo:

```css
:root {

    --primario: #00897b;

    --primario-oscuro: #00695c;

}
```

Deberán observar cómo un cambio en las variables puede modificar diferentes partes del sitio.

---

## Actividad 6 — Agregar un nuevo servicio

En:

```text
servicios.html
```

agregar al menos **un nuevo servicio**.

El nuevo servicio deberá mantener la estructura visual de las tarjetas existentes.

Deberán utilizar correctamente:

```html
<article>
```

títulos, párrafos y listas cuando correspondan.

---

## Actividad 7 — Modificar el formulario

Modificar:

```text
contacto.html
```

para adaptar el formulario a las necesidades de la empresa o proyecto elegido.

Pueden agregar nuevos campos utilizando elementos como:

```html
<input>
<textarea>
<select>
<option>
<button>
```

Deberán utilizar correctamente:

* `label`;
* `for`;
* `id`;
* `name`;
* `type`;
* `placeholder`;
* `required`.

---

## Actividad 8 — Validación con JavaScript

Agregar al formulario una validación utilizando JavaScript.

Por ejemplo, comprobar que:

* el nombre no esté vacío;
* el email tenga un formato válido;
* el mensaje tenga una cantidad mínima de caracteres.

La validación deberá ejecutarse cuando el usuario intente enviar el formulario.

---

## Actividad 9 — Crear una nueva función JavaScript

Agregar una nueva funcionalidad utilizando JavaScript.

Algunas posibilidades:

* botón para cambiar entre modo claro y oscuro;
* mostrar u ocultar información;
* contador;
* mensaje dinámico;
* botón "Volver arriba";
* cambio de contenido;
* interacción con tarjetas;
* mostrar la fecha actual.

La funcionalidad debe estar implementada en:

```text
js/script.js
```

No se recomienda colocar JavaScript directamente dentro del HTML.

---

## Actividad 10 — Agregar el favicon

Agregar el favicon proporcionado en el directorio compartido.

Se recomienda utilizar una carpeta:

```text
assets/
```

Por ejemplo:

```text
assets/
└── favicon.png
```

Luego agregar dentro del `<head>` de **todas las páginas HTML**:

```html
<link
    rel="icon"
    type="image/png"
    href="assets/favicon.png"
>
```

Verificar que el favicon aparezca correctamente en la pestaña del navegador.

---

## Actividad 11 — Git y GitHub

El proyecto deberá mantenerse actualizado en el repositorio de **GitHub Classroom**.

Cada modificación importante deberá estar acompañada por un commit.

Ejemplo:

```bash
git add .
```

```bash
git commit -m "Agrego pagina portfolio"
```

```bash
git push
```

Se recomienda utilizar mensajes de commit claros y descriptivos.

Ejemplos:

```text
Agrego pagina portfolio
Modifico colores del sitio
Agrego imagenes
Actualizo formulario
Agrego validacion JavaScript
Agrego favicon
```

---

# 📋 Requisitos finales

Al finalizar el proyecto deberá contener como mínimo:

* [ ] Página `index.html`.
* [ ] Página `nosotros.html`.
* [ ] Página `servicios.html`.
* [ ] Página `contacto.html`.
* [ ] Página `portfolio.html`.
* [ ] Navegación entre todas las páginas.
* [ ] Etiquetas HTML semánticas.
* [ ] Imágenes.
* [ ] Favicon.
* [ ] Hoja CSS externa.
* [ ] Diseño responsive.
* [ ] Archivo JavaScript externo.
* [ ] Una funcionalidad JavaScript adicional.
* [ ] Validación del formulario mediante JavaScript.
* [ ] Personalización de colores.
* [ ] Personalización de contenidos.
* [ ] Repositorio actualizado en GitHub Classroom.

---

# 💡 Conceptos que debemos comprender

Durante el desarrollo del proyecto deberán poder identificar la responsabilidad de cada tecnología:

```text
                 SITIO WEB
                     │
          ┌──────────┼──────────┐
          │          │          │
         HTML       CSS    JavaScript
          │          │          │
          ↓          ↓          ↓
      Estructura  Diseño    Comportamiento
      Contenido   Visual    Interacción
```

### HTML

Define la estructura y el significado del contenido.

### CSS

Define cómo se presenta visualmente ese contenido.

### JavaScript

Permite agregar comportamiento, lógica e interacción.

### Git

Permite registrar las diferentes versiones del proyecto.

### GitHub

Permite almacenar y compartir el repositorio de manera remota.

---

# 🎯 Objetivo final

El objetivo de este proyecto es comenzar a trabajar con una **estructura real de desarrollo Front End**, dejando atrás la idea de trabajar solamente con archivos HTML aislados.

Al finalizar deberán haber construido, personalizado y publicado un pequeño sitio web compuesto por varias páginas, utilizando:

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Git
 ↓
GitHub
```

Estos conocimientos serán la base para continuar posteriormente con tecnologías de desarrollo web como:

```text
JavaScript
     ↓
PHP
     ↓
Laravel
```

El objetivo no es solamente que el sitio "funcione", sino que puedan **comprender qué hace cada tecnología, cómo se relacionan los archivos y cómo organizar un proyecto web de manera correcta**.
