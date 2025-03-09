// src/test/setup.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('../../assets/images/movies.webp', () => 'movies-mock.jpg')
vi.mock('../../assets/images/series.webp', () => 'series-mock.jpg')
