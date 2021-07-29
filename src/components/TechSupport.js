import lucas from '../pics/lucas.jpg';
import matt from '../pics/matt.jpg';
import cat from '../pics/cat.jpg';

function TechSupport() {
    return (
        <section id="techSupport" class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="md:flex md:flex-wrap md:-m-4 grid grid-cols-3">
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                            <img alt="Man in sunglasses at the beach" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={lucas}/>
                            <br />
                            <span class="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Lucas Boyer</h2>
                            <p class="text-gray-500">Lexington, SC</p>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="Man with fish" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={matt}/>
                            <br />
                            <span class="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Matison Boyer</h2>
                            <p class="text-gray-500">Lexington, SC</p>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                            <img alt="cat" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={cat}/>
                            <br />
                            <span class="inline-block h-1 w-10 rounded bg-blue-900 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Tommy Cat</h2>
                            <p class="text-gray-500">Lexington, SC</p>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    );
}

export default TechSupport;