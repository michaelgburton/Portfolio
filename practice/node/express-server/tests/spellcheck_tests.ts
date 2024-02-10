import {describe, expect, test} from '@jest/globals';
import {spellcheck} from '../src/spellcheck';
import { SuggestedItem } from 'spellchecker-wasm';

describe('spellcheck module', () => {
  test('Returns no suggestions for a correctly-spelled word', async () => {
    expect(await spellcheck("word")).toStrictEqual([]);
  });
  test('Returns at least one suggestion for an incorrectly-spelled word', async () => {
    let out = await spellcheck("wrd")
    expect(out).toContainEqual(expect.objectContaining({term: "word"}));
  })
});
