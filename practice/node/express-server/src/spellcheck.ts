import { resolve } from 'path';
import { SpellcheckerWasm, SuggestedItem,  } from 'spellchecker-wasm';
import { ResultsHandler } from 'spellchecker-wasm/lib/SpellCheckerBase';
const wasmPath = resolve('node_modules/spellchecker-wasm/lib/spellchecker-wasm.wasm');
const dictionaryLocation = resolve('node_modules/spellchecker-wasm/lib/frequency_dictionary_en_82_765.txt');
let lastSuggestions : SuggestedItem[];
const resultsHandler : ResultsHandler = (suggestions) => { lastSuggestions = suggestions; }
const spellchecker = new SpellcheckerWasm(resultsHandler);

export async function spellcheck(word : string)
{
    await spellchecker.prepareSpellchecker(wasmPath, dictionaryLocation)
    await spellchecker.checkSpelling(word);
    return lastSuggestions ? lastSuggestions : [];
}