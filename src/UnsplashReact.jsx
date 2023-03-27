import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react"

const MY_ACCESS_KEY = "SiYUbVcmPN4o1obPBQv4nh7TQtbJ1hFtMFCjSAf39Dg"

export default function UnsplashUploader() {
  return (
    <UnsplashReact
      accessKey={MY_ACCESS_KEY}
      Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}
    />
  )
}