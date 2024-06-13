import { useContext, useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import ModeChangeContext from '../../store/mode-change-context';
import Button from '../shared/Button/Button';
import Card from '../shared/Card/Card';

import styles from './ProjectCard.module.css';

const ProjectCard = props => {

    const modeCtx = useContext(ModeChangeContext);

    const [link, setLink] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (link)
            window.open(link, '_blank');
    }, [link])

    const imageChangeHandler = imgName => {
        setId(imgName);
    }

    return (
        <div data-aos='zoom-out' data-aos-duration='700' data-aos-easing='ease-in-out' data-aos-once='true'>
            <Card className={`${styles.project__card} ${id === `img${props.project}b` ? styles['image--remove'] : ''}`}>
                <div className={styles.project__image}>
                    <img className={`${styles.image__pc} ${props.note ? styles.note : ''}`} src={props.src1} alt={`Project-${props.project} wide view`} />
                </div>
                <div className={styles.project__detail} style={{ color: !modeCtx.mode ? '#000' : '#fff' }}>
                    <h1>{props.heading}</h1>
                    <p style={{ fontWeight: !modeCtx.mode ? 'bold' : 'normal' }}>{props.detail1}<strong>{props.name}</strong>{props.detail2}</p>
                    <div className={styles.btns}>
                        <Button onClick={() => setLink(`${props.link}`)}>Have A Look</Button>
                        <Button onClick={imageChangeHandler.bind(this, `img${props.project}b`)}>Mobile View</Button>
                    </div>
                </div>
            </Card>


            <Card className={`${styles.image__mobile} ${id === `img${props.project}b` ? styles['image--display'] : ''}`}>
                <img className={styles.image__pc} src={props.src2} alt='Project-1 mobile view' />
                <Button onClick={imageChangeHandler.bind(this, '')}>Desktop View</Button>
            </Card>
        </div>
    );

};

export default ProjectCard;