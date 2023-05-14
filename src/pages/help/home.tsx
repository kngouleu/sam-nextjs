import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/Help/Help.styles';
import SearchForm from '@/components/Search/SearchForm';
import {  FaArrowRight } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import Link from 'next/link';

const Help: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <S.Body>
      <Header />
      <S.Container>
        <h1>How can we help you today?</h1>
        {/* Add search results or help articles here */}
      </S.Container>
      <S.Section>
        <S.SectionTitle>
          Got selling issues ? Quickly resolve them in Seller Help
        </S.SectionTitle>
        <S.SectionList>
          <S.SectionElement>
            Returns & refunds for sellers
            <FaArrowRight />
          </S.SectionElement>                        
          <S.SectionElement>
            Request to remove feedback 
            <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
            Request to remove defects
            <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
            Review policy issues
            <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
            Request a selling limit increase
            <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
            Getting paid      
            <FaArrowRight />    
          </S.SectionElement>            
        </S.SectionList>
      </S.Section>
      <S.Section>
        <S.SectionList>
          <S.SectionElement>
          Manage returns, missing items, and refunds for sellers            
          <FaArrowRight />
          </S.SectionElement>                        
          <S.SectionElement>
          Seller performance overview            
          <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
          Paying for items            
          <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
          Creating a listing            
          <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
          Replying to feedback you received for an item you sold            
          <FaArrowRight />
          </S.SectionElement>            
          <S.SectionElement>
          Fees, credits, and invoices overview
          <FaArrowRight />    
          </S.SectionElement>            
        </S.SectionList>
      </S.Section>

      <S.ContactContainer>
        <S.ContactUs>
          <h1>Need more help ?</h1>
          <S.ContactWay>
            <Link href={''}>
              <GrContact size={24} color="#000" />
              <S.ContactText>
                  <h2>Contact us</h2>
                  <p>Get the help you need from our automated assistant, or contact an agent</p>
              </S.ContactText>
            </Link>
          </S.ContactWay>
        </S.ContactUs>
      </S.ContactContainer>
      <Footer />
    </S.Body>
  );
};

export default Help;
