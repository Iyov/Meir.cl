# Política de Seguridad

## 🔒 Versiones Soportadas

Actualmente, estamos proporcionando actualizaciones de seguridad para las siguientes versiones:

| Versión | Soportada          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## 🚨 Reportar una Vulnerabilidad

La seguridad de nuestros usuarios es nuestra máxima prioridad. Si descubres una vulnerabilidad de seguridad, te pedimos que nos ayudes a proteger a nuestros usuarios siguiendo estas pautas.

### Proceso de Reporte

**NO** crees un issue público para vulnerabilidades de seguridad.

En su lugar, por favor:

1. **Envía un email** a: francisco.barrientos@meir.cl
2. **Incluye** la siguiente información:
   - Tipo de vulnerabilidad
   - Ubicación del código afectado (archivo, línea)
   - Pasos para reproducir la vulnerabilidad
   - Impacto potencial
   - Sugerencias de solución (si las tienes)

### Qué Esperar

- **Confirmación**: Recibirás una confirmación de recepción en 48 horas
- **Evaluación**: Evaluaremos la vulnerabilidad en 5 días hábiles
- **Actualización**: Te mantendremos informado del progreso
- **Resolución**: Trabajaremos en un fix y lo desplegaremos lo antes posible
- **Crédito**: Te daremos crédito por el descubrimiento (si lo deseas)

### Tiempo de Respuesta

| Severidad | Tiempo de Respuesta | Tiempo de Fix |
|-----------|-------------------|---------------|
| Crítica   | 24 horas          | 7 días        |
| Alta      | 48 horas          | 14 días       |
| Media     | 5 días            | 30 días       |
| Baja      | 7 días            | 60 días       |

## 🛡️ Mejores Prácticas de Seguridad

### Para Usuarios

1. **Mantén actualizado** el sitio a la última versión
2. **Usa HTTPS** siempre que sea posible
3. **Configura** correctamente los permisos de archivos
4. **Revisa** regularmente los logs de acceso
5. **Implementa** Content Security Policy (CSP)

### Para Desarrolladores

1. **Valida** todas las entradas de usuario
2. **Sanitiza** datos antes de mostrarlos
3. **Usa** HTTPS para todas las comunicaciones
4. **Implementa** rate limiting en formularios
5. **Mantén** dependencias actualizadas
6. **Revisa** código antes de hacer commit
7. **No** incluyas credenciales en el código

## 🔐 Configuración de Seguridad Recomendada

### Headers de Seguridad

Configura los siguientes headers en tu servidor:

```apache
# .htaccess (Apache)
<IfModule mod_headers.c>
    # Prevenir clickjacking
    Header always set X-Frame-Options "DENY"
    
    # Prevenir MIME type sniffing
    Header always set X-Content-Type-Options "nosniff"
    
    # Habilitar XSS protection
    Header always set X-XSS-Protection "1; mode=block"
    
    # Referrer Policy
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Content Security Policy
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://formspree.io"
</IfModule>
```

### HTTPS

Siempre usa HTTPS en producción:

```apache
# Forzar HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Permisos de Archivos

```bash
# Archivos
chmod 644 index.html
chmod 644 css/*.css
chmod 644 js/*.js

# Directorios
chmod 755 css/
chmod 755 js/
chmod 755 img/
```

## 🔍 Auditorías de Seguridad

### Herramientas Recomendadas

- [OWASP ZAP](https://www.zaproxy.org/) - Escáner de vulnerabilidades
- [Mozilla Observatory](https://observatory.mozilla.org/) - Análisis de seguridad web
- [Security Headers](https://securityheaders.com/) - Verificar headers de seguridad
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Análisis de configuración SSL/TLS

### Checklist de Seguridad

- [ ] HTTPS habilitado y forzado
- [ ] Headers de seguridad configurados
- [ ] Content Security Policy implementado
- [ ] Formularios protegidos contra CSRF
- [ ] Validación de entrada implementada
- [ ] Rate limiting configurado
- [ ] Logs de seguridad habilitados
- [ ] Backups regulares configurados
- [ ] Dependencias actualizadas
- [ ] Permisos de archivos correctos

## 🚫 Vulnerabilidades Conocidas

Actualmente no hay vulnerabilidades conocidas en la versión 1.0.x.

### Historial de Vulnerabilidades

Ninguna reportada hasta la fecha.

## 📋 Divulgación Responsable

Seguimos el principio de divulgación responsable:

1. **Privacidad**: Mantenemos confidencial la información de vulnerabilidades
2. **Coordinación**: Trabajamos contigo para entender y resolver el problema
3. **Tiempo**: Damos tiempo razonable para fix antes de divulgación pública
4. **Crédito**: Reconocemos públicamente tu contribución (si lo deseas)
5. **Transparencia**: Publicamos detalles después del fix

## 🏆 Hall of Fame

Agradecemos a los siguientes investigadores de seguridad por sus contribuciones:

*Ninguno hasta la fecha - ¡Sé el primero!*

## 📞 Contacto de Seguridad

**Email de Seguridad**: francisco.barrientos@meir.cl  
**PGP Key**: [Disponible bajo solicitud]  
**Tiempo de Respuesta**: 48 horas máximo

## 📚 Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Google Security Best Practices](https://developers.google.com/web/fundamentals/security)

## 🔄 Actualizaciones de Política

Esta política de seguridad se revisa y actualiza regularmente. Última actualización: 8 de Febrero de 2026.

---

**Nota**: Esta política de seguridad está sujeta a cambios. Por favor, revisa regularmente para estar al tanto de las actualizaciones.

¡Gracias por ayudarnos a mantener Meir Consultores de Energía seguro! 🛡️
