import React from 'react'

import { BlockTitle } from './BlockTitle'
import { Paragraph } from './Paragraph'

export const About = () => {
    return (
        <div className="bd-about bd-center">
            <div className="bd-block-default">
                <BlockTitle title="About" />

                <Paragraph text="The nature of policing in Australia is changing. Indeed, the very nature and the way Australians understand and execute justice is changing. Australia, like other Western countries, is experiencing a privatisation of policing functions as the number of private security providers and companies increase. By the year 2000, Robert Smith estimates that, in Victoria alone, there will be a ratio of private agent licence holders to police of 10:1. Based on 1992 trends, this converts to 100,000 licence holders and 10,000 police, he says(Smith 1994, p. 198). At present it is estimated that there are somewhere between 60,000-80,000 private security personnel nationwide (Wilson 1994, p.160).\nThe growth in private policing reflects growing demand for security and private agents. Fear and concern for violence and theft is causing more residents and companies to turn to personal crime prevention methods to protect their lives and property. In 1983-84 the reported crime rate was 7173.8 per 100,000 population. In 1994-95 the figure had leaped by 34% to 9653.3 per 100,000 (Mulkherjee, private communication, 1995 ). As private policing has become more prevalent, there is a changing expectation of the role of police in our society and delineates between private and public police functions." />
            </div>
        </div>
    )
}