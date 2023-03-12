import React from "react";
// import "./Home.css";

const Home = () => {
  return (
    <div class="mx-auto max-w-5xl px-4 py-8">
  <section class="rounded-lg bg-gray-100 p-8">
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <img
        alt="Melissa"
        src="https://scontent.fosu2-2.fna.fbcdn.net/v/t1.18169-9/26230170_10155475709084139_1818596727242776045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGDBFrL8nh8AX-AUtVI&_nc_ht=scontent.fosu2-2.fna&oh=00_AfDJSar60hp_cDjol32a0owjet3lcyS1h6gBwq3IhFThkA&oe=64357AA8"
        class="aspect-square w-full rounded-lg object-cover"
      />

      <blockquote class="sm:col-span-2">
        <p class="text-xl font-medium sm:text-2xl">
        At EMZY Salon & Spa, our main goal is to bring out your inner beauty with a one of a kind unique experience. Our skilled Artists are dedicated in creating your customized look with a wide range of services to pamper you from head to toe.
        </p>

        <cite class="mt-8 inline-flex items-center not-italic">
          <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
          <p class="text-sm uppercase text-gray-500 sm:ml-3">
            <strong>Melissa Zoellner </strong>, EMZY Inc.
          </p>
        </cite>
      </blockquote>
    </div>
  </section>
</div>

    
    
    // Old template
    // <div className="mx-auto px-4 py-8 mt-16 justify-center h-full">
    //   <h1 className="text-3xl font-bold mb-4">Welcome to EMZY Salon</h1>
    //   <p className="mb-4">We provide high-quality hair and beauty services at affordable prices. Our experienced and friendly staff will make you feel welcome and relaxed.</p>
    //   <h2 className="text-xl font-bold mb-2">Testimonials</h2>
    //   <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
    //     <p className="mb-2">&ldquo;I've been coming to EMZY for years and they never disappoint. Their stylists are knowledgeable and skilled, and they always make me feel beautiful.&rdquo;</p>
    //     <p className="text-right">&mdash; Jane D.</p>
    //   </div>
    //   <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
    //     <p className="mb-2">&ldquo;I recently had my hair done at EMZY and it looks amazing! The stylist really listened to what I wanted and gave me the perfect cut and color.&rdquo;</p>
    //     <p className="text-right">&mdash; John S.</p>
    //   </div>
    // </div>
  );
}



export default Home;
