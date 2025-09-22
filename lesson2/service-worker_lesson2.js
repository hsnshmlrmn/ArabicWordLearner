
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('arabic-quiz-lesson2-cache').then(function(cache) {
            return cache.addAll([
                'lesson2_arabic_quiz_pwa.html',
                'manifest_lesson2.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
