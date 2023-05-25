---
layout: offerings
lng_pair: id_offering
---
<script>
    function showContent(index){
        const servicesItems = document.getElementsByClassName("services-item");
        servicesItems[index].classList.toggle("active");
    }
</script>
<div class="row">
    <div class="col-md-12">
        <div class="position-relative">
            <div class="services-item" onclick="showContent(0)">
                <div class="services-item__head">Tipos de proyectos<span></span></div>
                <div class="services-item__content">
                    <ul>
                        <li>Museos</li>
                        <li>Exposiciones</li>
                        <li>Colaboraciones de arte contemporáneo</li>
                        <li>Herramientas y programas de aprendizaje</li>
                        <li>Programación cultural</li>
                        <li>Eventos culturales</li>
                        <li>Manifestación del patrimonio de empresas </li>
                        <li>Escritura:
                            <ul class="sub-item">
                                <li>Capítulos de libros</li>
                                <li>Artículos de revista</li>
                                <li>Artículos de opinión</li>
                                <li>Revistas online</li>
                                <li>Blogs</li>
                            </ul>
                        </li>
                        <li>Discursos:
                            <ul class="sub-item">
                                <li>Conferencias</li>
                                <li>Charlas</li>
                                <li>Alcance comunitario</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="services-item" onclick="showContent(1)">
                <div class="services-item__head">Tipo de clientes con el que trabajamos<span></span></div>
                <div class="services-item__content">
                    <ul>
                        <li>Museos y Archivos</li>
                        <li>Organismos gubernamentales como Ministerios de Cultura</li>
                        <li>Entidades administrativas como Ciudades y Ayuntamientos</li>
                        <li>Colecciones privadas</li>
                        <li>Galerías y la escena comercial</li>
                        <li>Instituciones educacionales</li>
                        <li>Empresas de diseño de exposiciones y otros contratistas principales en grandes proyectos</li>
                        <li>Conferencias y Festivales</li>
                        <li>Editoriales</li>
                        <li>Empresas que buscan aportar valor a su historia y patrimonio</li>
                        <li>ONGs</li>
                        <li>Startups culturales</li>
                        <li>Individuos con ideas inspiradoras</li>
                    </ul>
                </div>
            </div>
            <div class="services-item" onclick="showContent(2)">
                <div class="services-item__head">Habilidades de equipo<span></span></div>
                <div class="services-item__content">
                    <ul>
                        <li>Consultoría cultural</li>
                        <li>Propuestas curatoriales</li>
                        <li>Investigación</li>
                        <li>Creación de concepto</li>
                        <li>Desarrollo de contenido</li>
                        <li>Escritura de textos y guiones (para gráficos, audiovisuales e interactivos)</li>
                        <li>Coordinación de Producción de Contenidos</li>
                        <li>Gestión de colecciones</li>
                        <li>Idiomas extranjeros:
                            <ul class="sub-item">&nbsp;&nbsp;&nbsp;&nbsp;Todos los miembros del equipo son como mínimo bilingües en los siguientes idiomas:
                                <li>Inglés</li>
                                <li>Español</li>
                                <li>Francés</li>
                                <li>Italiano</li><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;También hablamos o estamos aprendiendo:
                                <li>Alemán</li>
                                <li>Árabe</li>
                                <li>Griego moderno</li>
                                <li>Portugues</li>
                                <li>Ruso</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
