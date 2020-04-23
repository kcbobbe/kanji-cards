import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/kanji.json');
    let parsed = await response.json();
    return parsed;
  }
}
