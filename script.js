document.addEventListener('DOMContentLoaded', function() {
    // Recetas por categoría
    function mostrarRecetas(categoria) {
        const recetas = {
            'platos-principales': [
                { 
                    nombre: 'Bibimbap', 
                    img: 'img/bidmap.jfif', 
                    ingredientes: 'Arroz, espinacas, zanahorias, setas, calabacín, huevo frito, carne (opcional), pasta de chile gochujang', 
                    preparacion: 'Cocina el arroz y saltea los vegetales y la carne por separado. Coloca todo sobre el arroz y añade un huevo frito encima. Acompaña con gochujang.' 
                },
                { 
                    nombre: 'Bulgogi', 
                    img: 'img/bulgogi.jfif', 
                    ingredientes: 'Carne de res finamente rebanada, salsa de soja, azúcar, ajo, aceite de sésamo, cebolletas', 
                    preparacion: 'Marina la carne con los ingredientes y luego cocínala a la parrilla o en sartén. Sírvelo con arroz.' 
                },
                { 
                    nombre: 'Samgyeopsal', 
                    img: 'img/sagyeospal.jfif', 
                    ingredientes: 'Panceta de cerdo en lonchas gruesas, ajo, salsa ssamjang (pasta de soja picante), lechuga', 
                    preparacion: 'Asa la panceta y sírvela con lechuga y ssamjang para hacer rollos.' 
                }
            ],
            'acompanamientos': [
                { 
                    nombre: 'Kimchi', 
                    img: 'img/kimchi.jfif', 
                    ingredientes: 'Col china, sal, ajo, jengibre, gochugaru (polvo de chile coreano)', 
                    preparacion: 'Fermenta la col sazonada con los demás ingredientes durante varios días hasta obtener el sabor deseado.' 
                },
                { 
                    nombre: 'Japchae', 
                    img: 'img/Japchae.jfif', 
                    ingredientes: 'Fideos de batata, espinacas, zanahorias, setas, carne (opcional), salsa de soja, azúcar', 
                    preparacion: 'Cocina los fideos y saltea con vegetales y carne. Añade la salsa de soja y azúcar.' 
                },
                { 
                    nombre: 'Kimchi Jijigae', 
                    img: 'img/kimchi jjigae.jfif', 
                    ingredientes: 'Kimchi, tofu, panceta de cerdo, cebolla, ajo, gochujang', 
                    preparacion: 'Cocina el kimchi junto con los demás ingredientes en caldo hasta que esté bien sazonado.' 
                }
            ],
            'postres': [
                { 
                    nombre: 'Hotteok', 
                    img: 'img/hotteok.jfif', 
                    ingredientes: 'Harina, azúcar, levadura, agua, relleno de azúcar moreno, canela y nueces', 
                    preparacion: 'Mezcla los ingredientes para la masa, déjala reposar y luego rellénala con la mezcla de azúcar y nueces antes de freír.' 
                },
                { 
                    nombre: 'Bungeoppang', 
                    img: 'img/bungueoppang.jfif', 
                    ingredientes: 'Harina, agua, azúcar, pasta de frijol rojo', 
                    preparacion: 'Vierte la mezcla de harina en moldes en forma de pez, rellénalos con pasta de frijol rojo y hornea.' 
                },
                { 
                    nombre: 'Tteok', 
                    img: 'img/tteok.jfif', 
                    ingredientes: 'Harina de arroz, azúcar, agua', 
                    preparacion: 'Mezcla la harina de arroz con agua y azúcar, y cocina al vapor hasta obtener una textura pegajosa.' 
                }
            ]
        };

        recetas[categoria].forEach(receta => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = receta.img;
            img.alt = receta.nombre;
            img.classList.add('card-img');

            const nombre = document.createElement('h3');
            nombre.textContent = receta.nombre;

            // Div para los ingredientes (siempre visibles)
            const ingredientes = document.createElement('div');
            ingredientes.classList.add('ingredientes');
            ingredientes.innerHTML = `<strong>Ingredientes:</strong> ${receta.ingredientes}`;

            // Div para el procedimiento (visible en hover)
            const procedimiento = document.createElement('div');
            procedimiento.classList.add('procedimiento');
            procedimiento.innerHTML = `<strong>Preparación:</strong> ${receta.preparacion}`;

            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(ingredientes);
            card.appendChild(procedimiento);

            document.getElementById(`${categoria}-carousel`).appendChild(card);
        });
    }

    // Cargar recetas por categoría
    mostrarRecetas('platos-principales');
    mostrarRecetas('acompanamientos');
    mostrarRecetas('postres');

    // Botón de scroll al inicio
    const btnScrollTop = document.getElementById('btnScrollTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btnScrollTop.style.display = 'block';
        } else {
            btnScrollTop.style.display = 'none';
        }
    });

    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});