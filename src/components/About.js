import gym from '../pics/gym.jpg';
import car from '../pics/car.jpg';
import game from '../pics/game.jpg';

function About() {
    return (
        <section id="about" class="bg-gray-500 pt-10">
                <h2 class="text-center text-3xl font-bold text-gray-900">About</h2>
                <ul class="grid p-10 gap-10 md:grid-cols-3">
                    <li class="bg-white shadow rounded-lg overflow-hidden">
                        <img src={gym} class="w-full" alt="Guy working out at gym"/> 
                        <div class="p-4">
                            <h3 class="font-bold">Working Out</h3>
                            <p>I love to workout</p>
                        </div>
                    </li>
                    
                    <li class="bg-white shadow rounded-lg overflow-hidden">
                        <img src={car} class="w-full" alt="Scion FRS Car"/>
                        <div class="p-4">
                            <h3 class="font-bold">Cars</h3>
                            <p>I love to work on and drive cars</p>
                        </div>
                    </li>
                    
                    <li class="bg-white shadow rounded-lg overflow-hidden">
                        <img src={game} class="w-full" alt="Guy sitting at desk playing video games"/>
                        <div class="p-4">
                            <h3 class="font-bold">Video Games</h3>
                            <p>I love gaming with my friends</p>
                        </div>
                    </li>

                </ul>
            </section>
    );
}

export default About;