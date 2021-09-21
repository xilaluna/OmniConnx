import React, { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import './MakePost.css';

function MakePost() {
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

	console.log(images);
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
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					border: 'lightgrey solid 2px',
					borderRadius: 20,
					color: 'gray',
					margin: '2vw',
					padding: '2vw',
					width: '35vw',
					height: '85vh',
				}}
				className="form"
			>
				<input
					type="text"
					style={{
						width: '25vw',
						border: '1px #DDDDDD solid',
						height: 25,
						borderRadius: 6,
					}}
					className="title"
					placeholder="Title..."
				/>
				<textarea
					type="text"
					style={{
						width: '30vw',
						marginTop: '4vh',
						minHeight: '20vh',
						border: '1px #DDDDDD solid',
						borderRadius: 6,
						fontFamily: 'Arial, Helvetica, sans-serif',
						fontSize: 12,
					}}
					className="text"
					placeholder="Text (optional)"
				/>

				<div
					{...getRootProps()}
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						border: '1px #DDDDDD solid',
						borderRadius: 20,
						minHeight: '18vh',
						width: '25vw',
						marginTop: '4vh',
					}}
					className="img-input"
				>
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
						style={{
							marginLeft: '1vw',
							marginRight: '1vw',
							width: '6vw',
							height: '5vh',
							fontSize: '1.1vw',
						}}
					/>
					<input
						type="text"
						style={{
							marginLeft: '1vw',
							marginRight: '1vw',
							width: '6vw',
							height: '5vh',
							fontSize: '1.1vw',
						}}
					/>
					<input
						type="text"
						style={{
							marginLeft: '1vw',
							marginRight: '1vw',
							width: '6vw',
							height: '5vh',
							fontSize: '1.1vw',
						}}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '15vh',
						width: '35vw',
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
					}}
				>
					<button
						style={{
							marginRight: '1vw',
						}}
						className="button-hover"
					>
						{' '}
						Cancel{' '}
					</button>
					<button className="button-hover"> Submit </button>
				</div>
			</form>
		</div>
	);
}
export default MakePost;
