import Image from 'next/image'
function Info({ user }) {
    return (
        <div className='mt-20 d-flex align-center flex_col'>
            <div className='d-flex align-center justify-center mt-20' style={{ position: 'relative' }}>
                {user.image &&
                    <>
                        <Image
                            src={user.image}
                            width={250}
                            height={250}
                            alt='user_image'
                            className='rounded mt-20'
                        />
                        <Image
                            src={user.image}
                            width={250}
                            height={250}
                            alt='user_image shadow'
                            className='rounded mt-20 shadow-Image'
                        />
                    </>
                }
            </div>
            <div className="mt-20">
                <h1 className="blue_gradient head_text">
                    {user.username}
                </h1>
                <p className="desc">{user.email}</p>
            </div>
        </div>
    )
}

export default Info