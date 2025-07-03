export default function TypographyTest() {
  return (
    <div className="prose dark:prose-invert mx-auto p-8">
      <h1>Judul Besar</h1>
      <p>
        Ini adalah paragraf biasa. Plugin typography Tailwind memberikan style
        default untuk elemen teks seperti <code>code</code>,{" "}
        <strong>strong</strong>, dan lain-lain.
      </p>
      <h2>Subjudul</h2>
      <ul>
        <li>Poin pertama</li>
        <li>Poin kedua</li>
      </ul>
      <blockquote>
        Ini adalah quote — plugin typography akan men-style elemen blockquote
        juga.
      </blockquote>
      <pre>
        <code>console.log("Hello, World!")</code>
      </pre>
    </div>
  );
}
