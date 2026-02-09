# Guía de Contribución

¡Gracias por tu interés en contribuir a Meir Consultores de Energía! Este documento proporciona pautas para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor, reporta comportamientos inaceptables a francisco.barrientos@meir.cl.

### Nuestros Estándares

**Comportamientos que contribuyen a crear un ambiente positivo:**

- Usar lenguaje acogedor e inclusivo
- Respetar diferentes puntos de vista y experiencias
- Aceptar críticas constructivas con gracia
- Enfocarse en lo que es mejor para la comunidad
- Mostrar empatía hacia otros miembros de la comunidad

**Comportamientos inaceptables:**

- Uso de lenguaje o imágenes sexualizadas
- Trolling, comentarios insultantes o despectivos
- Acoso público o privado
- Publicar información privada de otros sin permiso
- Otras conductas que puedan considerarse inapropiadas

## 🤝 ¿Cómo Puedo Contribuir?

### Reportar Bugs

Los bugs se rastrean como issues de GitHub. Antes de crear un issue:

1. **Verifica** que el bug no haya sido reportado previamente
2. **Determina** en qué repositorio debería crearse el issue
3. **Recopila** información sobre el bug

**Crea un issue** incluyendo:

- **Título claro y descriptivo**
- **Pasos para reproducir** el problema
- **Comportamiento esperado** vs **comportamiento actual**
- **Capturas de pantalla** si es aplicable
- **Información del entorno** (navegador, OS, versión)

### Sugerir Mejoras

Las sugerencias de mejoras también se rastrean como issues de GitHub.

**Crea un issue** incluyendo:

- **Título claro y descriptivo**
- **Descripción detallada** de la mejora sugerida
- **Explicación** de por qué esta mejora sería útil
- **Ejemplos** de cómo funcionaría la mejora

### Tu Primera Contribución de Código

¿No estás seguro por dónde empezar? Busca issues etiquetados como:

- `good first issue` - Issues apropiados para principiantes
- `help wanted` - Issues que necesitan ayuda

## 🔧 Proceso de Desarrollo

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/tu-usuario/meir.cl.git
cd meir.cl
```

### 2. Crear una Rama

```bash
# Crea una rama desde main
git checkout -b feature/nombre-descriptivo
```

**Convención de nombres de ramas:**

- `feature/` - Nuevas características
- `fix/` - Corrección de bugs
- `docs/` - Cambios en documentación
- `style/` - Cambios de formato (no afectan el código)
- `refactor/` - Refactorización de código
- `test/` - Agregar o modificar tests
- `chore/` - Tareas de mantenimiento

### 3. Hacer Cambios

- Escribe código limpio y legible
- Sigue los estándares de código del proyecto
- Comenta tu código cuando sea necesario
- Actualiza la documentación si es necesario

### 4. Commit

```bash
git add .
git commit -m "tipo: descripción breve del cambio"
```

**Convención de commits (Conventional Commits):**

```
tipo(alcance opcional): descripción

[cuerpo opcional]

[footer opcional]
```

**Tipos de commit:**

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma faltantes, etc.
- `refactor`: Refactorización de código
- `test`: Agregar tests
- `chore`: Tareas de mantenimiento

**Ejemplos:**

```bash
git commit -m "feat: agregar botón de WhatsApp flotante"
git commit -m "fix: corregir validación de formulario"
git commit -m "docs: actualizar README con instrucciones de instalación"
```

### 5. Push

```bash
git push origin feature/nombre-descriptivo
```

### 6. Pull Request

Abre un Pull Request en GitHub con:

- **Título descriptivo**
- **Descripción detallada** de los cambios
- **Referencias** a issues relacionados
- **Capturas de pantalla** si hay cambios visuales

## 📝 Estándares de Código

### HTML

- Usar HTML5 semántico
- Incluir atributos `alt` en todas las imágenes
- Usar atributos ARIA cuando sea apropiado
- Mantener la indentación consistente (2 espacios)

```html
<!-- ✅ Bueno -->
<section id="about" class="about">
  <h2>Quiénes Somos</h2>
  <img src="logo.png" alt="Logo de Meir Consultores" />
</section>

<!-- ❌ Malo -->
<div id="about">
  <h2>Quiénes Somos</h2>
  <img src="logo.png" />
</div>
```

### CSS

- Usar variables CSS para colores y valores reutilizables
- Seguir metodología BEM para nombres de clases
- Mantener la especificidad baja
- Agrupar propiedades relacionadas

```css
/* ✅ Bueno */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form__input {
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
}

/* ❌ Malo */
.form input {
  padding: 12px;
  border: 1px solid #ccc;
}
```

### JavaScript

- Usar ES6+ features
- Usar `const` y `let`, evitar `var`
- Nombres descriptivos para variables y funciones
- Comentar código complejo
- Manejar errores apropiadamente

```javascript
// ✅ Bueno
const initializeContactForm = () => {
  const form = document.getElementById('contactForm');
  
  if (!form) {
    console.error('Contact form not found');
    return;
  }
  
  form.addEventListener('submit', handleFormSubmit);
};

// ❌ Malo
function init() {
  var f = document.getElementById('contactForm');
  f.addEventListener('submit', function(e) {
    // código sin manejo de errores
  });
}
```

### Accesibilidad

- Seguir pautas WCAG 2.1 Nivel AA
- Usar contraste de color adecuado (mínimo 4.5:1)
- Incluir atributos ARIA cuando sea necesario
- Asegurar navegación por teclado
- Probar con lectores de pantalla

### Rendimiento

- Optimizar imágenes antes de commit
- Minimizar CSS y JS en producción
- Usar lazy loading para imágenes
- Evitar bloqueo del renderizado

## 🔍 Proceso de Pull Request

### Antes de Enviar

- [ ] El código sigue los estándares del proyecto
- [ ] Has ejecutado pruebas locales
- [ ] Has actualizado la documentación si es necesario
- [ ] Tu código no genera nuevas advertencias
- [ ] Has agregado tests si es aplicable
- [ ] Todos los tests pasan

### Checklist del PR

```markdown
## Descripción
Breve descripción de los cambios

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código en áreas difíciles de entender
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He agregado tests que prueban mi fix/feature
- [ ] Tests nuevos y existentes pasan localmente
```

### Revisión

- Todos los PRs requieren al menos una revisión aprobatoria
- Los mantenedores pueden solicitar cambios
- Responde a los comentarios de revisión de manera constructiva
- Realiza los cambios solicitados

### Merge

- Los PRs serán merged por los mantenedores
- Se usará "Squash and merge" para mantener un historial limpio
- La rama será eliminada después del merge

## 🐛 Reportar Bugs

### Antes de Reportar

1. **Actualiza** a la última versión
2. **Busca** en issues existentes
3. **Reproduce** el bug de manera consistente

### Template de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del bug.

**Para Reproducir**
Pasos para reproducir el comportamiento:
1. Ve a '...'
2. Haz clic en '...'
3. Desplázate hasta '...'
4. Ver error

**Comportamiento Esperado**
Descripción clara de lo que esperabas que sucediera.

**Capturas de Pantalla**
Si es aplicable, agrega capturas de pantalla.

**Entorno:**
 - OS: [e.g. Windows 10]
 - Navegador: [e.g. Chrome 96]
 - Versión: [e.g. 1.0.0]

**Contexto Adicional**
Cualquier otra información relevante.
```

## 💡 Sugerir Mejoras

### Template de Feature Request

```markdown
**¿Tu solicitud está relacionada con un problema?**
Descripción clara del problema. Ej: Siempre me frustra cuando [...]

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que suceda.

**Describe alternativas que has considerado**
Descripción de soluciones o características alternativas.

**Contexto Adicional**
Cualquier otra información o capturas de pantalla.
```

## 📚 Recursos Adicionales

- [Guía de Markdown](https://guides.github.com/features/mastering-markdown/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## ❓ Preguntas

Si tienes preguntas sobre cómo contribuir, puedes:

- Abrir un issue con la etiqueta `question`
- Enviar un email a francisco.barrientos@meir.cl
- Contactar en LinkedIn

---

¡Gracias por contribuir a Meir Consultores de Energía! 🎉
