// Async= Async baidal n negneesee hamaaralgui ajillah tolovte
function async() {
  Example("A"), Example("b"), Example("c");
}
// Sync= Sync baidal n negneesee hamaaraltai ba umnuh baidlaas hamaarch hodoldog.
function sync() {
  Example("A", () => {
    Example("b", () => {
      Example("c", () => {});
    });
  });
}
async();
sync();
