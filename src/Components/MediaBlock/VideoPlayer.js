/**
 * VideoPlayer.js
 * 
 * Wrapper component for embedding video elements.
 * Supports both HTML5 video files and YouTube embeds.
 */

const VideoPlayer = ({
  videoSrc,
  videoUrl,
  width = 320,
  height = 240,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = '',
}) => {
  // Accept both 'videoSrc' (original) and 'videoUrl' (JSON) props
  const src = videoSrc || videoUrl
  
  if (!src) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <strong>Warning:</strong> VideoPlayer missing videoSrc URL
      </div>
    )
  }

  // Check if it's a YouTube embed URL
  if (src.includes('youtube.com/embed') || src.includes('youtu.be')) {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <iframe
          width={width * 2}
          height={height * 2}
          src={src}
          title="YouTube Video"
          allowFullScreen
          style={{ maxWidth: '100%', border: 'none' }}
        />
      </div>
    )
  }

  // Otherwise use HTML5 video tag for local video files
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <video
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <source src={src} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
    </div>
  )
}

export default VideoPlayer
