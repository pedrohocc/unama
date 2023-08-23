class ConnectionAPI {
  final String _urlBase = 'http://10.0.2.2:49384';

  String buildUrl(String path) {
    return '$_urlBase/$path';
  }
}
