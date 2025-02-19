import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl py-16  md:py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Discover the Ultimate Quiz Experience
            </h2>
            <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
              Quizard offers a range of features to enhance your quiz
              experience.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <Image
                src="https://t3.ftcdn.net/jpg/05/10/88/82/360_F_510888200_EentlrpDCeyf2L5FZEeSfgYaeiZ80qAU.jpg"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="text-sm text-gray-500">
                Get 24/7 support to help you with any quiz-related issues or
                questions.
              </p>
            </div>
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <Image
                src="https://static.thenounproject.com/png/2630835-200.png"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold">Organise</h3>
              <p className="text-sm text-gray-500">
                Organise your quizzes and track your progress with ease.
              </p>
            </div>
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <Image
                src="https://media.istockphoto.com/id/921429972/vector/flexibility-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=OJRFVO5RgLFfaX-JqNSgu7W5S-afP0yWJnB2ffK6R8o="
                alt=""
                width={500}
                height={500}
                className="inline-block h-16 w-16 object-cover rounded-full "
              />
              <h3 className="text-xl font-semibold">Flexibility</h3>
              <p className="text-sm text-gray-500">
                Enjoy the flexibility to take quizzes at your own pace and time.
              </p>
            </div>
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <Image
                src="https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-vector-speedometer-icon-png-image_1024774.jpg"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full scale-125"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold">Speed</h3>
              <p className="text-sm text-gray-500">
                Take quizzes quickly and efficiently with our fast-loading
                platform.
              </p>
            </div>
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1212/1212289.png"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold ">Quality</h3>
              <p className="text-sm text-gray-500">
                Experience high-quality quizzes with accurate and reliable
                content.
              </p>
            </div>
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <Image
                src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-book-icon-png-image_5143094.jpg"
                alt=""
                className="inline-block h-16 w-16 object-cover rounded-full "
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold">Resource</h3>
              <p className="text-sm text-gray-500">
                Access a wide range of quizzes and resources to test your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
