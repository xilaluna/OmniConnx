import React, { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import './MakePost.css';

// Redux imports

import { useDispatch } from 'react-redux';
import { submitPost } from '../../reduxcomps/actions';
function MakePost() {
	const dispatch = useDispatch();
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});
	const images = files.map((file) => (
		<div key={file.name}>
			<div>
				<img
					src={file.preview}
					style={{ width: 200, height: 200 }}
					alt="preview"
				/>
			</div>
		</div>
	));

	// For Redux useState variables

	const [titles, setTitle] = useState('');
	const [descs, setDesc] = useState('');
	// const [image, setImage] = useState('');
	const [tag1s, setTag1] = useState('');
	const [tag2s, setTag2] = useState('');
	const [tag3s, setTag3] = useState('');

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '2rem 4rem',
			}}
			className="main"
		>
			<form className="form">
				<input
					type="text"
					// className="text"
					placeholder="Title..."
					style={{
						width: '25vw',
						border: '1px #DDDDDD solid',
						height: 25,
						borderRadius: 6,
					}}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<textarea
					type="text"
					className="text"
					placeholder="Text (optional)"
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>

				<div {...getRootProps()} className="img-input">
					<input {...getInputProps()} />
					{files.length !== 0 ? (
						images
					) : (
						<div>
							<p>Drop files here or </p>
							<button
								style={{
									width: '5vw',
									height: '3vh',
									marginLeft: '4%',
								}}
								className="button-hover"
							>
								Upload
							</button>
						</div>
					)}
				</div>

				<div
					style={{ display: 'flex', flexDirection: 'row', marginTop: '4vh' }}
				>
					<h3>Tags</h3>
					<input
						type="text"
						className="tags"
						onChange={(e) => {
							setTag1(e.target.value);
						}}
					/>
					<input
						type="text"
						className="tags"
						onChange={(e) => {
							setTag2(e.target.value);
						}}
					/>
					<input
						type="text"
						className="tags"
						onChange={(e) => {
							setTag3(e.target.value);
						}}
					/>
				</div>
				<div className="button-bottoms">
					<button
						style={{
							marginRight: '1vw',
						}}
						className="button-hover"
						type="submit"
					>
						{' '}
						Cancel{' '}
					</button>
					<button
						className="button-hover"
						onClick={(e) => {
							dispatch(submitPost(titles, descs, images, tag1s, tag2s, tag3s));
						}}
					>
						{' '}
						Submit{' '}
					</button>
				</div>
			</form>
		</div>
	);
}
export default MakePost;
