// mqttSercice.ts
// https://medium.com/@rossbulat/advanced-typescript-by-example-api-service-manager-7ea591f5eba8

//fetch('https://reactnative.dev/movies.json')
//     .then((response) => response.json())
//     .then((json) => setData(json.movies)) // e.g. "movies": [{ "id": "1", "title": "Star Wars", "releaseYear": "1977" },]
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false));

export class MQTTService {
  private _authToken: string;
  private _channel: string;
  private _topic: string;
  constructor(private _authToken: string) {}

  // getter
  get authToken(): string {
    return this._authToken;
  }

  get channel(): string {
    return this._channel;
  }

  get topic(): string {
    return this._topic;
  }

  // setter
  set channel(newChannel: string) {
    this._channel = newChannel;
  }

  set authToken(newAuthToken: string) {
    this._authToken = newAuthToken;
  }

  set topic(newTopic: string) {
    return (this._topic = newTopic);
  }
}
