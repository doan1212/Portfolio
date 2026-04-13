/**
 * IFrameEmbed.js
 * 
 * Wrapper component for embedding iframes (Figma prototypes, YouTube videos, etc.)
 * Standardizes iframe rendering for use in JSON-driven content.
 */

const IFrameEmbed = ({
  src,
  embedUrl,
  title = 'Embedded Content',
  height = 700,
  className = '',
}) => {
  // Accept both 'src' (original) and 'embedUrl' (JSON) props
  const srcUrl = src || embedUrl
  
  if (!srcUrl) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <strong>Warning:</strong> IFrame embed missing src URL
      </div>
    )
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <iframe
        src={srcUrl}
        className="w-full md:w-full"
        height={height}
        title={title}
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  )
}

export default IFrameEmbed
