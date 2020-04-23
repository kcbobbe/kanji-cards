import Model, { attr } from '@ember-data/model';

export default class KanjiModel extends Model {
  @attr kanji;
  @attr kmeaning;
  @attr kunyomi_ja;
  @attr kunyomi;
  @attr onyomi_ja;
  @attr onyomi;
}
