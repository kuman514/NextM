'use client';

import { useRouter } from 'next/navigation';

import Button from '^/shared/button';
import TextInput from '^/shared/text-input';
import { FormEvent } from 'react';

export default function SearchInput() {
  const router = useRouter();

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchName = (formData.get('search-name') ?? '').toString().trim();

    if (searchName.length === 0) {
      return;
    }

    router.push(`/search?searchName=${searchName}`);
  }

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-row gap-x-2">
      <TextInput aria-label="search-name-text-input" name="search-name" />
      <Button aria-label="search-button">Search</Button>
    </form>
  );
}
