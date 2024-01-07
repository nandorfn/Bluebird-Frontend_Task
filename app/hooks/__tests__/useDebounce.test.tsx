import { waitFor, renderHook, act as hookAct } from '@testing-library/react';
import useDebounce from '../useDebounce';

describe('useDebounce', () => {  
  test('debouning value', async () => {
    jest.useFakeTimers();
    
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    // Initial render
    expect(result.current).toBe('initial');

    // perbarui value
    rerender({ value: 'updated', delay: 500 });

    // Value tidak langsung berubah
    expect(result.current).toBe('initial');

    hookAct(() => {
      jest.advanceTimersByTime(500);
    });

    // data berhasil diperbarui jika sudah delay 500ms
    await waitFor(() => {
      expect(result.current).toBe('updated');
    });
  });

  jest.useRealTimers();
});