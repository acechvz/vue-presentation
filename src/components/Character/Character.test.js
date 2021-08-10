import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';

import Character from './Character.vue';

describe('Character', () => {
  it('should display name and image properly', () => {
    const { container } = render(Character, {
      props: {
        name: 'Morty Smith',
        image: 'image.png',
      },
    });

    const image = container.querySelector('img');

    expect(screen.queryByText('Morty Smith')).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toEqual('image.png');
  });
});
