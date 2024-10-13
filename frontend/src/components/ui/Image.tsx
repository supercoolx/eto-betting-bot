import { useState, Fragment } from "react";

type ImageProps = {
    src: string
    width?: number
    height?: number
    className?: string
    alt?: string
    [key: string]: any
}

const Image = ({ src, width, height, alt, className, ...otherProps }: ImageProps) => {
    const [loading, setLoading] = useState(false);

    return <Fragment>
        <div
            className={` ${className ?? ''}`}
            style={{
                display: loading ? 'auto' : 'none',
                width: width ? width + 'px' : '',
                height: height ? height + 'px' : ''
            }}
        />
        <img
            className={` ${className ?? ''}`}
            style={{
                display: loading ? 'none' : 'auto',
                width: width ? width + 'px' : '',
                height: height ? height + 'px' : ''
            }}
            src={src} alt={alt ?? ''}
            onLoad={() => setLoading(false)}
            {...otherProps}
        />
    </Fragment>
}

export default Image;