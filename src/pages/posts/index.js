import React from 'react';
import Layout from '../../components/Layout';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import './index.scss';
import { posts } from './data.js';
import Button from '../../components/Button';

const PostsView = () => {
    return (
        <Layout>
            <div className="grid--container">
                <h1>Tabla de Posteos</h1>
                <GridComponent dataSource={posts} allowPaging={true} pageSettings={{ pageSize: 6 }} allowFiltering={true} allowGrouping={true} allowSorting={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='id_post' headerText='Post ID' width={100} />
                        <ColumnDirective field='thumbnail' headerText='Thumbnail' />
                        <ColumnDirective field='title' headerText='Title' />
                        <ColumnDirective field='text' headerText='Text' />
                        <ColumnDirective field='authors' headerText='Authors' />
                        <ColumnDirective field='date' headerText='Date' width={180} />
                    </ColumnsDirective>
                    <Inject services={[Page, Filter, Group, Sort]} />
                </GridComponent>
                <div className="grid--container__button">
                    <Button
                        href='/post'
                        fullWidth
                    >Crear Post</Button>
                </div>
            </div>
        </Layout>
    )
}

export default PostsView;
