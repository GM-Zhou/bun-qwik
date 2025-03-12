import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <div class='text-3xl'>Welcome to Qwik</div>
      <div class='mt-4 text-lg text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia enim dicta distinctio
        blanditiis nostrum cumque quae laudantium laboriosam, necessitatibus facilis ullam pariatur
        quam consequuntur velit natus obcaecati deserunt cupiditate!
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
